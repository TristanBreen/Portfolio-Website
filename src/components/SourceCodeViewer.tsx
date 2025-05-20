import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SourceCodeViewerProps {
  code: string;
  language: string;
}

const SourceCodeViewer: React.FC<SourceCodeViewerProps> = ({ code, language }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="bg-terminal-selection px-4 py-2 text-sm">
        <span className="text-terminal-comment">// Source Code - </span>
        <span className="text-terminal-yellow">{language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.375rem 0.375rem',
          fontSize: '0.9rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SourceCodeViewer;