'use client';

export default function ChallengeInstructions() {
  return (
    <div className="prose prose-slate max-w-none mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mt-0">Todo List Challenge</h2>
      <p className="text-gray-600">
        The goal of this exercise is to create a working todo list with persistent data storage.
      </p>
      <p className="text-gray-600">
        To start with, we have a styled todo list that supports adding todos. We also have premade styles for completed todo items. Although there&apos;s no working mechanism for &quot;completing&quot; a todo.
      </p>
      <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
      <ul className="text-gray-600 list-disc pl-4">
        <li>Clicking on a todo item should toggle the &quot;checked&quot; state.</li>
        <li>The todo list state should be saved and loaded from local storage.</li>
        <li>Checked items should sink to the bottom of the list automatically</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-900">Stretch Goals</h3>
      <ul className="text-gray-600 list-disc pl-4">
        <li>Allow todos to be deleted. When you hover your mouse over a todo, an X should appear on the far right side, clicking the X should remove it from the list.</li>
        <li>Add hidden timestamps to todos (created_at, completed_at), these will be used for sorting</li>
        <li>The active todos should be sorted by created_at descending</li>
        <li>The completed todos should be sorted by completed_at ascending</li>
      </ul>
    </div>
  );
} 