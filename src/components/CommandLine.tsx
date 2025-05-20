import React, { useState, useEffect, useRef } from 'react';
import useKeySound from '../hooks/useKeySound';

interface CommandLineProps {
  onCommand: (command: string, output: React.ReactNode) => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommand }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { playKeystroke } = useKeySound();
  
  useEffect(() => {
    // Focus input on mount and when clicked anywhere in the terminal
    inputRef.current?.focus();
    
    const handleClick = () => {
      inputRef.current?.focus();
    };
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    playKeystroke();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      // Pass command to parent to be processed
      onCommand(input, '');
      setInput('');
    }
  };

  return (
    <div className="flex items-center mt-1">
      <span className="text-terminal-green mr-2">tristan@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none caret-terminal-green flex-1"
        aria-label="Terminal command input"
        autoComplete="off"
        spellCheck="false"
      />
      <span className="w-2 h-5 bg-terminal-green animate-cursor-blink" />
    </div>
  );
};

export default CommandLine;