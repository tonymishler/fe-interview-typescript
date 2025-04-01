export type CodeLanguage = 'html' | 'css' | 'typescript';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface CodeEditorProps {
  code: string;
  language: CodeLanguage;
  onChange: (value: string) => void;
}

export interface PreviewProps {
  html: string;
  css: string;
  typescript: string;
}

export interface TabProps {
  active: CodeLanguage;
  onTabChange: (tab: CodeLanguage) => void;
} 