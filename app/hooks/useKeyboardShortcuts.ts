'use client';

import { useEffect } from 'react';
import { CodeLanguage } from '../types';

interface KeyboardShortcutProps {
  onTabChange: (tab: CodeLanguage) => void;
}

/**
 * A custom hook that adds keyboard shortcuts for switching between editor tabs.
 * Listens for Ctrl/Cmd + number key combinations to switch between HTML, CSS, and TypeScript editors.
 * 
 * Shortcuts:
 * - Ctrl/Cmd + 1: Switch to HTML editor
 * - Ctrl/Cmd + 2: Switch to CSS editor
 * - Ctrl/Cmd + 3: Switch to TypeScript editor
 * 
 * @param onTabChange - Callback function to handle tab changes
 */
export function useKeyboardShortcuts({ onTabChange }: KeyboardShortcutProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl (Windows/Linux) or Cmd (Mac) key is pressed
      if (event.metaKey || event.ctrlKey) {
        switch (event.key) {
          case '1':
            event.preventDefault(); // Prevent default browser behavior
            onTabChange('html');
            break;
          case '2':
            event.preventDefault();
            onTabChange('css');
            break;
          case '3':
            event.preventDefault();
            onTabChange('typescript');
            break;
          default:
            break;
        }
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener when component unmounts
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTabChange]);
} 