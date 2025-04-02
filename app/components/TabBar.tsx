'use client';

import { CodeLanguage } from '../types';

interface TabBarProps {
  active: CodeLanguage;
  onTabChange: (tab: CodeLanguage) => void;
}

const tabs = [
  { id: 'html' as CodeLanguage, label: 'HTML' },
  { id: 'css' as CodeLanguage, label: 'CSS' },
  { id: 'typescript' as CodeLanguage, label: 'TypeScript' }
];

export default function TabBar({ active, onTabChange }: TabBarProps) {
  return (
    <div className="flex gap-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${
              active === tab.id
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 