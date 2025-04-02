'use client';

import { useParams } from 'next/navigation';

const instructions = {
  'typescript': {
    'todo-list': {
      title: 'Todo List Challenge',
      description: 'The goal of this exercise is to create a working todo list with sorting and filtering capabilities.',
      context: 'To start with, we have a styled todo list that supports adding todos. We also have premade styles for completed todo items. Although there\'s no working mechanism for "completing" a todo.',
      requirements: [
        'Clicking on a todo item should toggle the "checked" state',
        'Checked items should sink to the bottom of the list automatically'
      ],
      stretchGoals: [
        'Allow todos to be deleted. When you hover your mouse over a todo, an X should appear on the far right side, clicking the X should remove it from the list',
        'Add hidden timestamps to todos (created_at, completed_at), these will be used for sorting',
        'The active todos should be sorted by created_at descending',
        'The completed todos should be sorted by completed_at ascending'
      ]
    },
    'counter': {
      title: 'Counter Challenge',
      description: 'Build an interactive counter with customizable step size, limits, and history tracking.',
      context: 'We\'ve provided a basic counter interface with increment/decrement buttons, step size input, and min/max value inputs. The counter needs to be implemented with TypeScript.',
      requirements: [
        'Implement increment and decrement functions that respect the step size',
        'Implement the reset function to set the counter back to 0',
        'Prevent the counter from going below the min value or above the max value',
        'Update the display whenever the counter changes'
      ],
      stretchGoals: [
        'Add timestamps to history entries',
        'Sort history with most recent actions at the top',
        'Add validation to prevent invalid input values',
        'Add undo/redo functionality using the history'
      ]
    }
  }
};

export default function ChallengeInstructions() {
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;
  
  const currentInstructions = instructions[category as keyof typeof instructions]?.[id as keyof (typeof instructions)[keyof typeof instructions]];

  if (!currentInstructions) {
    return null;
  }

  return (
    <div className="prose prose-slate max-w-none mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mt-0">{currentInstructions.title}</h2>
      <p className="text-gray-600">
        {currentInstructions.description}
      </p>
      <p className="text-gray-600">
        {currentInstructions.context}
      </p>
      <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
      <ul className="text-gray-600 list-disc pl-4">
        {currentInstructions.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold text-gray-900">Stretch Goals</h3>
      <ul className="text-gray-600 list-disc pl-4">
        {currentInstructions.stretchGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
} 