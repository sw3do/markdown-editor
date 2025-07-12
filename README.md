# 📝 Markdown Editor

<div align="center">

![Markdown Editor](https://img.shields.io/badge/Markdown-Editor-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black.svg)
![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![SCSS](https://img.shields.io/badge/SCSS-Styled-pink.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**A modern, feature-rich markdown editor with live preview**

[Report Bug](https://github.com/sw3do/markdown-editor/issues) • [Request Feature](https://github.com/sw3do/markdown-editor/issues)

</div>

## ✨ Features

### 🚀 **Core Features**
- **Live Preview** - See your markdown rendered in real-time
- **Split View** - Editor and preview side by side
- **Syntax Highlighting** - Beautiful code block highlighting
- **GitHub Flavored Markdown** - Full GFM support including tables, strikethrough, and task lists
- **Auto-save** - Never lose your work with automatic local storage

### 🎨 **Customization**
- **Theme Support** - Light, Dark, and Auto (system preference)
- **Font Size Control** - Adjustable from 12px to 20px
- **Line Numbers** - Toggle line numbers on/off
- **Word Wrap** - Control text wrapping behavior

### 📁 **File Management**
- **Import Files** - Load `.md` and `.txt` files
- **Export Options** - Download as Markdown, HTML, or Plain Text
- **Copy to Clipboard** - Quick copy functionality
- **Local Storage** - Automatic saving and settings persistence

### 🛠️ **Editor Tools**
- **Text Formatting** - Bold, italic, strikethrough, code, headings
- **Quick Insert** - Tables, code blocks, checklists, quotes, links, images, badges
- **Smart Templates** - Pre-built markdown templates
- **Responsive Design** - Perfect on desktop, tablet, and mobile


```
🖥️ Desktop View
📱 Mobile View  
🌙 Dark Theme
☀️ Light Theme
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sw3do/markdown-editor.git
   cd markdown-editor
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using bun
   bun install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using bun
   bun dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Tech Stack

### **Frontend**
- **Next.js 15.3.5** - React framework with App Router
- **React 19.0.0** - UI library with latest features
- **TypeScript 5.0** - Type-safe development
- **SCSS Modules** - Styled components with modern CSS

### **Markdown Processing**
- **react-markdown** - Markdown to React component conversion
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** - Syntax highlighting for code blocks
- **rehype-raw** - Raw HTML support in markdown

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Sass** - Advanced CSS preprocessing
- **Prism.js** - Code syntax highlighting themes

## 📖 Usage

### Basic Usage

1. **Start Writing** - Type your markdown in the left panel
2. **Live Preview** - See the rendered output in the right panel
3. **Switch Views** - Use Editor, Split, or Preview modes
4. **Customize** - Adjust theme, font size, and other settings

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + B` | **Bold** text |
| `Ctrl + I` | *Italic* text |
| `Ctrl + S` | Save file |

### File Operations

```markdown
📂 Import    - Load existing markdown files
💾 Save      - Download as .md file
🌐 Export    - Convert to HTML
📄 Text      - Export as plain text
📋 Copy      - Copy to clipboard
```

### Themes

- **☀️ Light Theme** - Clean, bright interface
- **🌙 Dark Theme** - Easy on the eyes
- **🌓 Auto Theme** - Follows system preference

### Customization

Edit `src/app/components/MarkdownEditor.module.scss` to customize:

- Colors and themes
- Typography and spacing
- Animation and transitions
- Responsive breakpoints

## 📱 Responsive Design

- **Desktop** (1200px+) - Full feature set with side-by-side panels
- **Tablet** (768px - 1199px) - Adaptive layout with collapsible panels
- **Mobile** (< 768px) - Single panel view with tab switching

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Process

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Coding Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Write descriptive commit messages
- Add comments for complex logic
- Test on multiple browsers

## 📋 Roadmap

- [ ] **Real-time Collaboration** - Multiple users editing simultaneously
- [ ] **Mathematical Expressions** - KaTeX integration
- [ ] **Diagram Support** - Mermaid diagrams
- [ ] **Version History** - Document versioning and history

## 🐛 Known Issues

- Some browser extensions may interfere with auto-save
- Large files (>10MB) may cause performance issues
- Mobile Safari requires double-tap for some buttons

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**sw3do**

- GitHub: [@sw3do](https://github.com/sw3do)
- Email: [sw3doo@gmail.com](mailto:sw3doo@gmail.com)


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [react-markdown](https://github.com/remarkjs/react-markdown) for markdown processing
- [Prism.js](https://prismjs.com/) for syntax highlighting
- [Heroicons](https://heroicons.com/) for beautiful icons (if used)
- All contributors who helped make this project better

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">

**[⬆ Back to Top](#-markdown-editor)**

Made with ❤️ by [sw3do](https://github.com/sw3do)

</div>
