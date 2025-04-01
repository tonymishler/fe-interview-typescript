'use client';

import { useState } from 'react';

/**
 * A custom hook that provides persistent state storage using localStorage.
 * Works similarly to useState but persists the value across page reloads.
 * 
 * @param key - The key under which to store the value in localStorage
 * @param initialValue - The initial value to use if no value exists in localStorage
 * @returns A tuple containing the current value and a setter function
 * 
 * @example
 * const [code, setCode] = useLocalStorage('editor-code', defaultCode);
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with value from localStorage if it exists
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Return initial value if running on server or if window is not available
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage if running in browser
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
} 