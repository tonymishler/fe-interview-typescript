'use client';

import { useState, use } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import CodeEditor from '../../../components/CodeEditor';
import Preview from '../../../components/Preview';
import TabBar from '../../../components/TabBar';
import { CodeLanguage } from '../../../types';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useKeyboardShortcuts } from '../../../hooks/useKeyboardShortcuts';
import { ErrorBoundary } from '../../../components/ErrorBoundary';
import ChallengeInstructions from '../../../components/ChallengeInstructions';
import Link from 'next/link';

// This would typically come from a database or API
const challenges = {
  typescript: {
    'todo-list': {
      title: 'Todo List',
      description: 'Build a todo list application with TypeScript',
      defaultCode: {
        html: '<div id="app">\n  <h1>Todo App</h1>\n  <div class="todo-input">\n    <input type="text" id="newTodo" placeholder="Add a new todo">\n    <button onclick="addTodo()">Add</button>\n  </div>\n  <ul id="todoList"></ul>\n</div>',
        css: 'body {\n  font-family: system-ui, sans-serif;\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n\n.todo-input {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\ninput {\n  flex: 1;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  background: #0070f3;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #0051cc;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n\nli:last-child {\n  border-bottom: none;\n}\n\nli.completed span {\n  text-decoration: line-through;\n  color: #666;\n}',
        typescript: `// Define your Todo type\ninterface Todo {\n  id: number;\n  text: string;\n  completed: boolean;\n}\n\n// Initialize todos array\nvar todos: Todo[] = [];\n\n// Add a new todo item\nfunction addTodo() {\n  const input = document.getElementById("newTodo") as HTMLInputElement;\n  if (!input) return;\n  \n  const text = input.value.trim();\n  if (text === "") return;\n\n  // TODO: Create and add a new todo item\n  // Hint: Use the Todo interface above\n  // Hint: You can use Date.now() for the id\n\n  input.value = "";\n  renderTodos();\n}\n\n// Render the todo list\nfunction renderTodos() {\n  const list = document.getElementById("todoList");\n  if (!list) return;\n  \n  // Clear the current list\n  list.innerHTML = "";\n\n  // TODO: Render your todos here\n  // Hint: Create and append elements to show each todo\n  // Don't forget to add event listeners for completing and deleting todos\n}`
      }
    },
    'counter': {
      title: 'Counter App',
      description: 'Build an interactive counter with TypeScript',
      defaultCode: {
        html: '<div id="app">\n  <h1>Counter App</h1>\n  <div class="counter-container">\n    <div class="controls">\n      <input type="number" id="stepSize" value="1" min="1" max="10">\n      <button onclick="decrement()">-</button>\n      <span id="count">0</span>\n      <button onclick="increment()">+</button>\n      <button onclick="reset()">Reset</button>\n    </div>\n    <div class="limits">\n      <label>Min: <input type="number" id="minValue" value="-10"></label>\n      <label>Max: <input type="number" id="maxValue" value="10"></label>\n    </div>\n    <ul id="history" class="history"></ul>\n  </div>\n</div>',
        css: 'body {\n  font-family: system-ui, sans-serif;\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n  text-align: center;\n}\n\n.counter-container {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.controls {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n#count {\n  font-size: 2rem;\n  font-weight: bold;\n  min-width: 4rem;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border: none;\n  border-radius: 4px;\n  background: #0070f3;\n  color: white;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #0051cc;\n}\n\nbutton[onclick="reset"] {\n  background: #666;\n}\n\nbutton[onclick="reset"]:hover {\n  background: #444;\n}\n\ninput[type="number"] {\n  width: 4rem;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.limits {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n.history {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  text-align: left;\n}\n\n.history li {\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n  color: #666;\n}\n\n.history li:last-child {\n  border-bottom: none;\n  color: #000;\n  font-weight: bold;\n}',
        typescript: `// Define interfaces for our counter state\ninterface CounterState {\n  count: number;\n  stepSize: number;\n  minValue: number;\n  maxValue: number;\n  history: string[];\n}\n\n// TODO: Initialize the counter state\n// Hint: Use the CounterState interface\n// Hint: Initialize with default values\n\n// TODO: Implement increment function\nfunction increment() {\n  // Hint: Get the step size from the input\n  // Hint: Check max value before incrementing\n  // Hint: Update the display and history\n}\n\n// TODO: Implement decrement function\nfunction decrement() {\n  // Hint: Get the step size from the input\n  // Hint: Check min value before decrementing\n  // Hint: Update the display and history\n}\n\n// TODO: Implement reset function\nfunction reset() {\n  // Hint: Reset count to 0\n  // Hint: Add to history\n  // Hint: Update display\n}\n\n// TODO: Implement updateDisplay function\nfunction updateDisplay() {\n  // Hint: Update count display\n  // Hint: Update history list\n  // Hint: Keep most recent action at top\n}\n\n// TODO: Add any helper functions you need\n// Hint: Consider validation functions for inputs\n// Hint: Consider functions to format history entries`
      }
    }
  }
};

export default function ChallengePage({ params }: { params: Promise<{ category: string; id: string }> }) {
  // Unwrap params first before any usage
  const resolvedParams = use(params);
  const { category, id } = resolvedParams;
  
  const [activeTab, setActiveTab] = useState<CodeLanguage>('html');
  const challenge = challenges[category as keyof typeof challenges]?.[id as keyof (typeof challenges)[keyof typeof challenges]];
  const [code, setCode] = useLocalStorage(`editor-code-${category}-${id}`, challenge?.defaultCode || { html: '', css: '', typescript: '' });
  
  useKeyboardShortcuts({ onTabChange: setActiveTab });

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Challenge Not Found</h1>
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              Return to Challenges
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleCodeChange = (newCode: string) => {
    setCode(prev => ({
      ...prev,
      [activeTab]: newCode
    }));
  };

  const handleReset = () => {
    setCode(challenge.defaultCode);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/" className="text-blue-500 hover:text-blue-600 mb-2 inline-block">
              ← Back to Challenges
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              {challenge.title}
            </h1>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Reset Code
          </button>
        </div>

        <ChallengeInstructions />
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <PanelGroup direction="horizontal">
            <Panel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="p-4 border-b">
                  <div className="space-y-2">
                    <TabBar active={activeTab} onTabChange={setActiveTab} />
                    <div className="text-sm text-gray-500">
                      Keyboard shortcuts: Ctrl/Cmd + 1 (HTML), 2 (CSS), 3 (TypeScript)
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <ErrorBoundary>
                    <CodeEditor
                      code={code[activeTab as keyof typeof code]}
                      language={activeTab}
                      onChange={handleCodeChange}
                    />
                  </ErrorBoundary>
                </div>
              </div>
            </Panel>
            
            <PanelResizeHandle className="w-2 bg-gray-100 hover:bg-gray-200 transition-colors" />
            
            <Panel defaultSize={50} minSize={30}>
              <div className="h-full p-4">
                <ErrorBoundary>
                  <Preview
                    html={code.html}
                    css={code.css}
                    typescript={code.typescript}
                  />
                </ErrorBoundary>
              </div>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
} 