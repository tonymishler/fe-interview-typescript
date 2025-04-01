'use client';

import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import type { CodeEditorProps } from '../types';

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '');
  };

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg border border-gray-200">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor; 