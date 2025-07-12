# Contributing to Markdown Editor

Thank you for your interest in contributing to the Markdown Editor! 🎉

## 🤝 Ways to Contribute

- 🐛 **Bug Reports** - Help us identify and fix issues
- 💡 **Feature Requests** - Suggest new functionality
- 📝 **Documentation** - Improve our docs and examples
- 🔧 **Code Contributions** - Submit bug fixes and new features
- 🎨 **Design** - UI/UX improvements and suggestions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/sw3do/markdown-editor.git
   cd markdown-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript** - Use TypeScript for all new code
- **ESLint** - Follow the existing ESLint configuration
- **Prettier** - Code formatting is handled automatically
- **Comments** - Add comments for complex logic
- **Naming** - Use descriptive variable and function names

### Component Structure

```typescript
// Good component structure
interface ComponentProps {
  // Type definitions
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // State and hooks
  const [state, setState] = useState();
  
  // Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default Component;
```

### SCSS Guidelines

- Use SCSS modules for component styling
- Follow BEM-like naming conventions
- Use CSS custom properties for theme values
- Ensure responsive design for all screen sizes

### Commit Messages

Use conventional commits format:

```
feat: add dark theme support
fix: resolve mobile layout issue
docs: update installation instructions
style: improve button hover animations
refactor: optimize markdown parsing
test: add unit tests for editor component
```

## 🐛 Bug Reports

### Before Submitting

1. **Search existing issues** - Check if the bug has already been reported
2. **Test in multiple browsers** - Ensure it's not browser-specific
3. **Minimal reproduction** - Create the smallest example that demonstrates the issue

### Bug Report Template

```markdown
**Describe the Bug**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- OS: [e.g., Windows 10, macOS Big Sur]
- Browser: [e.g., Chrome 96, Firefox 95]
- Device: [e.g., Desktop, iPhone 12]

**Screenshots**
If applicable, add screenshots to help explain the problem.
```

## 💡 Feature Requests

### Before Submitting

1. **Check existing features** - Make sure it doesn't already exist
2. **Search existing requests** - Avoid duplicates
3. **Consider the scope** - Is it within the project's goals?

### Feature Request Template

```markdown
**Feature Description**
A clear description of what you want to happen.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How do you envision this feature working?

**Alternatives Considered**
What other solutions have you considered?

**Additional Context**
Add any other context or screenshots about the feature request.
```

## 🔧 Pull Requests

### Before Submitting

1. **Create an issue** - Discuss major changes first
2. **Fork the repository** - Work on your own copy
3. **Create a feature branch** - Don't work directly on main
4. **Test your changes** - Ensure everything works
5. **Update documentation** - If needed

### Pull Request Process

1. **Create a descriptive title**
   ```
   feat: add real-time collaboration support
   fix: resolve mobile keyboard issue
   docs: improve installation guide
   ```

2. **Fill out the PR template**
   - Link related issues
   - Describe your changes
   - Add screenshots if UI changes
   - Mention breaking changes

3. **Ensure all checks pass**
   - Linting and formatting
   - TypeScript compilation
   - Build process

4. **Request review**
   - Be responsive to feedback
   - Make requested changes
   - Keep discussions constructive

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested this change locally
- [ ] I have tested on multiple browsers
- [ ] I have tested on mobile devices

## Screenshots
Add screenshots of UI changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged
```

## 🧪 Testing

### Manual Testing

Test your changes across:

- **Browsers**: Chrome, Firefox, Safari, Edge
- **Devices**: Desktop, tablet, mobile
- **Themes**: Light, dark, auto
- **Features**: All major functionality

### Automated Testing (Future)

We're planning to add:

- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright

## 📚 Documentation

### Types of Documentation

- **README** - Project overview and setup
- **API Documentation** - Component interfaces
- **User Guide** - How to use features
- **Developer Guide** - How to contribute

### Writing Guidelines

- Use clear, simple language
- Include code examples
- Add screenshots for UI features
- Keep it up to date

## 🏷️ Labels

We use these labels to organize issues and PRs:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 🎉 Recognition

Contributors will be recognized in:

- README acknowledgments
- Release notes
- GitHub contributors page

## 📞 Getting Help

Need help? Reach out:

- **GitHub Issues** - For project-related questions
- **GitHub Discussions** - For general discussion
- **Email** - [sw3odo@gmail.com](mailto:sw3doo@gmail.com)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Markdown Editor! 🚀 