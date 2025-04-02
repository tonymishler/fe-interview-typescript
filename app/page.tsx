'use client';

import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import TabBar from './components/TabBar';
import { CodeLanguage } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { ErrorBoundary } from './components/ErrorBoundary';
import ChallengeInstructions from './components/ChallengeInstructions';

const defaultCode = {
  html: '<div id="app">\n  <h1>Todo App</h1>\n  <div class="todo-input">\n    <input type="text" id="newTodo" placeholder="Add a new todo">\n    <button onclick="addTodo()">Add</button>\n  </div>\n  <ul id="todoList"></ul>\n</div>',
  css: 'body {\n  font-family: system-ui, sans-serif;\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n\n.todo-input {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\ninput {\n  flex: 1;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  background: #0070f3;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #0051cc;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid #eee;\n  position: relative;\n}\n\nli:last-child {\n  border-bottom: none;\n}\n\nli.completed span {\n  text-decoration: line-through;\n  color: #666;\n}\n\n.delete-btn {\n  display: none;\n  position: absolute;\n  right: 0.5rem;\n  color: #ff4444;\n  cursor: pointer;\n}\n\nli:hover .delete-btn {\n  display: block;\n}',
  typescript: `// Define your Todo type
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  created_at?: number;
  completed_at?: number;
}

// Initialize todos array
var todos: Todo[] = [];

// Add a new todo item
function addTodo() {
  const input = document.getElementById("newTodo") as HTMLInputElement;
  if (!input) return;
  
  const text = input.value.trim();
  if (text === "") return;

  const todo: Todo = {
    id: Date.now(),
    text: text,
    completed: false,
    created_at: Date.now()
  };

  todos.push(todo);
  input.value = "";
  renderTodos();
}

// Toggle todo completion
function toggleTodo(id: number) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    todo.completed_at = todo.completed ? Date.now() : undefined;
    renderTodos();
  }
}

// Delete a todo
function deleteTodo(id: number) {
  todos = todos.filter(t => t.id !== id);
  renderTodos();
}

// Render the todo list
function renderTodos() {
  const list = document.getElementById("todoList");
  if (!list) return;
  
  // Clear the current list
  list.innerHTML = "";

  // Sort completed items to the bottom
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  // Render each todo item
  sortedTodos.forEach(todo => {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onclick = () => toggleTodo(todo.id);
    
    const span = document.createElement("span");
    span.textContent = todo.text;
    
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Initial render
renderTodos();`
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<CodeLanguage>('html');
  const [code, setCode] = useLocalStorage('editor-code', defaultCode);

  useKeyboardShortcuts({ onTabChange: setActiveTab });

  const handleCodeChange = (newCode: string) => {
    setCode(prev => ({
      ...prev,
      [activeTab]: newCode
    }));
  };

  const handleReset = () => {
    setCode(defaultCode);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Frontend Interview Platform
          </h1>
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
