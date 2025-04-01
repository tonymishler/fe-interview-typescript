'use client';

import { useEffect, useRef } from 'react';
import type { PreviewProps } from '../types';
import * as ts from 'typescript';

/**
 * Preview component that renders HTML, CSS, and TypeScript code in real-time.
 * Uses an iframe for isolation and security, preventing the preview code from
 * accessing the parent window's content.
 */
export default function Preview({ html, css, typescript }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const updatePreview = () => {
      if (!iframeRef.current) return;

      // Compile TypeScript to JavaScript
      const compiledJS = ts.transpileModule(typescript, {
        compilerOptions: {
          target: ts.ScriptTarget.ES5,
          module: ts.ModuleKind.None,
          strict: true,
        }
      }).outputText;

      const previewContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          <script>
            ${compiledJS}
          </script>
          ${html}
        </body>
        </html>
      `;

      const iframe = iframeRef.current;
      iframe.srcdoc = previewContent;
    };

    updatePreview();
  }, [html, css, typescript]);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200 bg-white">
      <iframe
        ref={iframeRef}
        title="preview"
        className="w-full h-full border-none"
        sandbox="allow-scripts"
      />
    </div>
  );
} 