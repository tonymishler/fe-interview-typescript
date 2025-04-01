'use client';

import { useState } from 'react';

export const ChallengeInstructions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Todo List Application Challenge</h2>
          <p className="text-gray-600 mb-4">
            Build a functional todo list application using HTML, CSS, and TypeScript.
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className={`space-y-6 ${isExpanded ? '' : 'hidden'}`}>
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-2">What's Already Set Up:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Basic HTML structure with necessary container elements</li>
            <li>CSS reset and base styling</li>
            <li>TypeScript interfaces and basic function declarations</li>
            <li>Real-time preview environment</li>
            <li>Local storage persistence for your code</li>
            <li>Error handling and sandbox environment</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your Tasks:</h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-600">
            <li>
              <span className="font-medium">HTML (Ctrl/Cmd + 1):</span>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Create a form for adding new todos</li>
                <li>Add a list container for todo items</li>
                <li>Ensure proper semantic HTML structure</li>
                <li>Add appropriate ARIA attributes for accessibility</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">CSS (Ctrl/Cmd + 2):</span>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Style the todo input form</li>
                <li>Create a clean, modern design for todo items</li>
                <li>Add hover and focus states</li>
                <li>Implement responsive design</li>
                <li>Add transitions/animations for better UX</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">TypeScript (Ctrl/Cmd + 3):</span>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Implement addTodo functionality</li>
                <li>Add toggleTodo to mark items complete</li>
                <li>Create deleteTodo functionality</li>
                <li>Update the renderTodos function</li>
                <li>Add proper type safety throughout</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>All code must be properly typed with TypeScript</li>
            <li>The application must be responsive and work on mobile devices</li>
            <li>Implement proper error handling</li>
            <li>Use semantic HTML and follow accessibility best practices</li>
            <li>Add appropriate hover/focus states and visual feedback</li>
            <li>Ensure the UI is intuitive and user-friendly</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bonus Points:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Add keyboard shortcuts for common actions</li>
            <li>Implement drag-and-drop for reordering todos</li>
            <li>Add filters (All, Active, Completed)</li>
            <li>Implement todo categories or priority levels</li>
            <li>Add unit tests for your TypeScript functions</li>
          </ul>
        </section>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Tip:</strong> Your code is automatically saved in the browser's local storage. 
            You can refresh the page or come back later without losing your work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeInstructions; 