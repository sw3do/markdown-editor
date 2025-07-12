'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from './MarkdownEditor.module.scss';
import 'prismjs/themes/prism-tomorrow.css';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor! 🚀

## Features

- **Live Preview**: See your markdown code instantly
- **Syntax Highlighting**: Code blocks with colorization
- **GitHub Flavored Markdown**: Tables, strikethrough text and more
- **Responsive Design**: Mobile-friendly interface

## Code Example

\`\`\`javascript
function sayHello(name) {
  return \`Hello, \${name}!\`;
}

console.log(sayHello('World'));
\`\`\`

## Table Example

| Feature | Status |
|---------|--------|
| Editor | ✅ Ready |
| Preview | ✅ Ready |
| Save | 🔄 In Progress |

## To-Do List

- [x] Basic editor
- [x] Markdown preview
- [ ] File saving
- [ ] Theme selection
- [ ] Export feature

> **Tip**: Write your markdown code in the left panel, see the result in the right panel!

**Bold text** and *italic text* examples.

[This is a link](https://example.com) and this is inline code: \`const x = 5;\`

---

Start using your markdown editor! 🎉`);

  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'split'>('split');
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [fontSize, setFontSize] = useState(14);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [wordWrap, setWordWrap] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [fileName, setFileName] = useState('untitled.md');
  const [notification, setNotification] = useState<string | null>(null);

  const lineNumbers = useMemo(() => {
    return markdown.split('\n').map((_, index) => index + 1);
  }, [markdown]);

  const handleTabChange = (tab: 'editor' | 'preview' | 'split') => {
    setActiveTab(tab);
  };



  const clearEditor = () => {
    if (markdown.trim() === '') {
      showNotification('ℹ️ Editor is already empty!');
      return;
    }
    setMarkdown('');
    showNotification('🗑️ Editor cleared!');
  };

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('markdown-editor-theme') as 'light' | 'dark' | 'auto';
      const savedFontSize = localStorage.getItem('markdown-editor-fontSize');
      const savedContent = localStorage.getItem('markdown-editor-content');
      const savedFileName = localStorage.getItem('markdown-editor-fileName');
      
      if (savedTheme) setTheme(savedTheme);
      if (savedFontSize) setFontSize(parseInt(savedFontSize));
      if (savedContent && autoSave) setMarkdown(savedContent);
      if (savedFileName) setFileName(savedFileName);
    } catch (error) {
      console.error('LocalStorage reading error:', error);
    }
  }, [autoSave]);

  useEffect(() => {
    if (autoSave) {
      const saveTimeout = setTimeout(() => {
        try {
          localStorage.setItem('markdown-editor-content', markdown);
        } catch (error) {
          console.error('Auto-save error:', error);
        }
      }, 1000);
      return () => clearTimeout(saveTimeout);
    }
  }, [markdown, autoSave]);

  useEffect(() => {
    try {
      localStorage.setItem('markdown-editor-theme', theme);
      localStorage.setItem('markdown-editor-fontSize', fontSize.toString());
      localStorage.setItem('markdown-editor-fileName', fileName);
    } catch (error) {
      console.error('Settings save error:', error);
    }
  }, [theme, fontSize, fileName]);

  const insertTemplate = (template: string) => {
    const templates = {
      table: `| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |`,
      codeblock: `\`\`\`javascript
// Code block example
function hello() {
  console.log('Hello World!');
}
\`\`\``,
      checklist: `- [x] Completed task
- [ ] Todo task
- [ ] Another task`,
      quote: `> This is a quote example.
> It can have multiple lines.`,
      badge: `![Badge](https://img.shields.io/badge/status-active-brightgreen)`,
      link: `[Link text](https://example.com)`,
      image: `![Alt text](image-url.jpg)`,
      math: `$$
E = mc^2
$$`
    };
    
    setMarkdown(prev => prev + '\n\n' + templates[template as keyof typeof templates]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setMarkdown(content);
        setFileName(file.name);
        showNotification(`📂 ${file.name} uploaded successfully!`);
      };
      reader.onerror = () => {
        showNotification('❌ File upload error!');
      };
      reader.readAsText(file);
    }
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExport = (format: 'md' | 'html' | 'txt') => {
    switch (format) {
      case 'md':
        downloadFile(markdown, fileName, 'text/markdown');
        showNotification('💾 Markdown file downloaded successfully!');
        break;
      case 'html':
        const escapeHtml = (text: string) => {
          return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/`/g, '&#96;');
        };
        
        const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>${escapeHtml(fileName)}</title>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
               max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <div id="content"></div>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        const markdownContent = ${JSON.stringify(markdown)};
        document.getElementById('content').innerHTML = marked.parse(markdownContent);
    </script>
</body>
</html>`;
        downloadFile(htmlContent, fileName.replace('.md', '.html'), 'text/html');
        showNotification('🌐 HTML file downloaded successfully!');
        break;
      case 'txt':
        downloadFile(markdown, fileName.replace('.md', '.txt'), 'text/plain');
        showNotification('📄 Text file downloaded successfully!');
        break;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      showNotification('📋 Markdown copied successfully!');
    } catch (err) {
      console.error('Copy error:', err);
      showNotification('❌ Copy error!');
    }
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const themeNames = ['Light', 'Dark', 'Auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    showNotification(`🎨 ${themeNames[nextIndex]} theme activated!`);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      default: return '🌓';
    }
  };

  const formatText = (format: string) => {
    if (!editorRef.current) return;
    
    const textarea = editorRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    
    let formattedText = '';
    let cursorOffset = 0;
    
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorOffset = selectedText ? formattedText.length : 2;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        cursorOffset = selectedText ? formattedText.length : 1;
        break;
      case 'strikethrough':
        formattedText = `~~${selectedText}~~`;
        cursorOffset = selectedText ? formattedText.length : 2;
        break;
      case 'code':
        formattedText = `\`${selectedText}\``;
        cursorOffset = selectedText ? formattedText.length : 1;
        break;
      case 'heading':
        formattedText = `## ${selectedText}`;
        cursorOffset = formattedText.length;
        break;
    }
    
    const newText = markdown.substring(0, start) + formattedText + markdown.substring(end);
    setMarkdown(newText);
    
    setTimeout(() => {
      textarea.focus();
      const newPosition = selectedText ? start + formattedText.length : start + cursorOffset;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  return (
    <div className={styles.container} data-theme={theme}>
      {notification && (
        <div className={styles.notification}>
          {notification}
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>📝 Markdown Editor</h1>
          <span className={styles.subtitle}>Write markdown with live preview</span>
          <div className={styles.fileInfo}>
            <span className={styles.fileName}>{fileName}</span>
            {autoSave && <span className={styles.autoSaveIndicator}>🔄 Auto-save enabled</span>}
          </div>
        </div>
        
        <div className={styles.controls}>
          <div className={styles.viewModes}>
            <button
              className={`${styles.modeBtn} ${activeTab === 'editor' ? styles.active : ''}`}
              onClick={() => handleTabChange('editor')}
            >
              ✏️ Editor
            </button>
            <button
              className={`${styles.modeBtn} ${activeTab === 'split' ? styles.active : ''}`}
              onClick={() => handleTabChange('split')}
            >
              📱 Split
            </button>
            <button
              className={`${styles.modeBtn} ${activeTab === 'preview' ? styles.active : ''}`}
              onClick={() => handleTabChange('preview')}
            >
              👁️ Preview
            </button>
          </div>
          
          <div className={styles.actions}>
            <button
              className={styles.actionBtn}
              onClick={toggleTheme}
              title={`Theme: ${theme}`}
            >
              {getThemeIcon()}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.settingsBar}>
        <div className={styles.settingsGroup}>
          <label>
            <span>Font Size:</span>
            <input
              type="range"
              min="12"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className={styles.slider}
            />
            <span>{fontSize}px</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={showLineNumbers}
              onChange={(e) => setShowLineNumbers(e.target.checked)}
            />
            <span>Line Numbers</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={wordWrap}
              onChange={(e) => setWordWrap(e.target.checked)}
            />
            <span>Word Wrap</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => setAutoSave(e.target.checked)}
            />
            <span>Auto Save</span>
          </label>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.toolGroup}>
          <span className={styles.toolGroupLabel}>File:</span>
          <input
            type="file"
            accept=".md,.txt"
            onChange={handleFileUpload}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button
            className={styles.toolBtn}
            onClick={() => fileInputRef.current?.click()}
            title="Upload file"
          >
            📂 Open
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => handleExport('md')}
            title="Download as markdown"
          >
            💾 Save
          </button>
          <button
            className={styles.toolBtn}
            onClick={copyToClipboard}
            title="Copy to clipboard"
          >
            📋 Copy
          </button>
          <button
            className={styles.toolBtn}
            onClick={clearEditor}
            title="Clear editor"
          >
            🗑️ Clear
          </button>
        </div>

        <div className={styles.toolGroup}>
          <span className={styles.toolGroupLabel}>Format:</span>
          <button
            className={styles.toolBtn}
            onClick={() => formatText('bold')}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => formatText('italic')}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => formatText('strikethrough')}
            title="Strikethrough"
          >
            <s>S</s>
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => formatText('code')}
            title="Code"
          >
            💻 Code
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => formatText('heading')}
            title="Heading"
          >
            H
          </button>
        </div>

        <div className={styles.toolGroup}>
          <span className={styles.toolGroupLabel}>Insert:</span>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('table')}
            title="Insert table"
          >
            📊 Table
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('codeblock')}
            title="Insert code block"
          >
            💻 Code Block
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('checklist')}
            title="Insert checklist"
          >
            ☑️ Checklist
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('quote')}
            title="Insert quote"
          >
            💬 Quote
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('link')}
            title="Insert link"
          >
            🔗 Link
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('image')}
            title="Insert image"
          >
            🖼️ Image
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => insertTemplate('badge')}
            title="Insert badge"
          >
            🏷️ Badge
          </button>
        </div>

        <div className={styles.toolGroup}>
          <span className={styles.toolGroupLabel}>Export:</span>
          <button
            className={styles.toolBtn}
            onClick={() => handleExport('html')}
            title="Download as HTML"
          >
            🌐 HTML
          </button>
          <button
            className={styles.toolBtn}
            onClick={() => handleExport('txt')}
            title="Download as text"
          >
            📄 TXT
          </button>
        </div>
      </div>

      <div className={styles.editorContainer}>
        <div className={`${styles.editorPanel} ${activeTab === 'preview' ? styles.hidden : ''}`}>
          <div className={styles.panelHeader}>
            <h3>📝 Markdown Editor</h3>
            <span className={styles.charCount}>{markdown.length} characters</span>
          </div>
          <textarea
            ref={editorRef}
            className={styles.editor}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write your markdown code here..."
            spellCheck={false}
            style={{
              fontSize: `${fontSize}px`,
              whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
              lineHeight: showLineNumbers ? '1.5' : '1.6'
            }}
          />
          {showLineNumbers && (
            <div className={styles.lineNumbers}>
              {lineNumbers.map((lineNum) => (
                <div key={lineNum} className={styles.lineNumber}>
                  {lineNum}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`${styles.previewPanel} ${activeTab === 'editor' ? styles.hidden : ''}`}>
          <div className={styles.panelHeader}>
            <h3>👁️ Preview</h3>
            <span className={styles.wordCount}>
              {markdown.split(/\s+/).filter(word => word.length > 0).length} words
            </span>
          </div>
          <div className={styles.preview}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                code: ({ className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={styles.inlineCode} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor; 