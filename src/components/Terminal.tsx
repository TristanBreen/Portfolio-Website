import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';
import CommandLine from './CommandLine';
import CommandOutput from './CommandOutput';
import { useTerminal } from '../context/TerminalContext';

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { commandHistory, addToHistory } = useTerminal();
  
  useEffect(() => {
    // Auto-scroll to bottom when command history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Initial help command
  useEffect(() => {
    if (commandHistory.length === 0) {
      addToHistory('help', '');
    }
  }, []);

  return (
    <div 
      className={`bg-terminal-background text-terminal-foreground font-terminal rounded-lg overflow-hidden shadow-2xl border border-terminal-selection flex flex-col
      ${isFullScreen ? 'fixed inset-0 z-50 rounded-none' : 'w-full max-w-3xl h-[80vh]'}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-terminal-selection border-b border-terminal-comment">
        <div className="flex space-x-2 mr-4">
          <button 
            className="w-3 h-3 rounded-full bg-terminal-red flex items-center justify-center"
            aria-label="Close terminal"
          >
            <X className="w-2 h-2 text-terminal-background opacity-0 hover:opacity-100" />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-terminal-yellow flex items-center justify-center"
            aria-label="Minimize terminal"
          >
            <Minimize2 className="w-2 h-2 text-terminal-background opacity-0 hover:opacity-100" />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-terminal-green flex items-center justify-center"
            onClick={handleFullScreen}
            aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
          >
            <Maximize2 className="w-2 h-2 text-terminal-background opacity-0 hover:opacity-100" />
          </button>
        </div>
        <div className="text-xs text-center flex-1">tristan@portfolio:~</div>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto"
      >
        {commandHistory.map((item, index) => (
          <div key={index} className="mb-4">
            {item.command && (
              <div className="flex items-center">
                <span className="text-terminal-green mr-2">tristan@portfolio:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <CommandOutput output={item.output} />
          </div>
        ))}
        
        <CommandLine onCommand={addToHistory} />
      </div>
    </div>
  );
};

export default Terminal;