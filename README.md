# Frontend Interview Platform

A modern, interactive platform for conducting frontend developer interviews. This platform provides a real-time coding environment where candidates can work on HTML, CSS, and TypeScript challenges while seeing immediate results.

## Features

- 🖥️ Real-time code editor with syntax highlighting
- 👁️ Live preview of code changes
- 🎨 Support for HTML, CSS, and TypeScript
- 💾 Automatic code persistence
- ⌨️ Keyboard shortcuts for quick navigation
- 📱 Responsive design
- 🔄 Resizable editor/preview panels
- 🛡️ Error boundaries for stability

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fe-interview-typescript.git
   cd fe-interview-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Keyboard Shortcuts

- `Ctrl/Cmd + 1`: Switch to HTML editor
- `Ctrl/Cmd + 2`: Switch to CSS editor
- `Ctrl/Cmd + 3`: Switch to TypeScript editor

### Code Persistence

All code changes are automatically saved to the browser's local storage. This means candidates can refresh the page or come back later without losing their work.

### Sample Challenge

The platform comes with a pre-configured Todo App challenge that tests candidates' abilities to:
- Structure semantic HTML
- Style components with CSS
- Implement TypeScript functionality
- Handle user interactions
- Manage state
- Work with the DOM

## Development

### Project Structure

```
fe-interview-typescript/
├── app/
│   ├── components/
│   │   ├── CodeEditor.tsx
│   │   ├── Preview.tsx
│   │   ├── TabBar.tsx
│   │   └── ErrorBoundary.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useKeyboardShortcuts.ts
│   ├── types/
│   │   └── index.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── package.json
```

### Adding New Challenges

To add new challenges, modify the `defaultCode` object in `app/page.tsx`. Each challenge should include:
- HTML template
- CSS styles
- TypeScript functionality
- Clear instructions for candidates

## Deployment

The platform is designed to be deployed on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
