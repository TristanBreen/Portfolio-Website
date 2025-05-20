import React, { createContext, useContext, useState, useEffect } from 'react';
import { processCommand } from '../utils/commandProcessor';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

interface TerminalContextType {
  commandHistory: HistoryItem[];
  addToHistory: (command: string, output: React.ReactNode) => void;
  currentDirectory: string;
  setCurrentDirectory: (dir: string) => void;
  clearHistory: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};

interface TerminalProviderProps {
  children: React.ReactNode;
}

const TerminalProvider: React.FC<TerminalProviderProps> = ({ children }) => {
  const [commandHistory, setCommandHistory] = useState<HistoryItem[]>([]);
  const [currentDirectory, setCurrentDirectory] = useState<string>('~');

  const clearHistory = () => {
    setCommandHistory([]);
    // Re-add the help command after clearing
    setTimeout(() => {
      addToHistory('help', '');
    }, 100);
  };

  const addToHistory = (command: string, initialOutput: React.ReactNode = '') => {
    if (command.trim().toLowerCase() === 'clear') {
      clearHistory();
      return;
    }

    const newItem: HistoryItem = {
      command,
      output: initialOutput,
    };
    
    setCommandHistory(prev => [...prev, newItem]);
    
    // Process the command and update the output
    const output = processCommand(command, currentDirectory);
    
    setTimeout(() => {
      setCommandHistory(prev => 
        prev.map((item, i) => 
          i === prev.length - 1 ? { ...item, output } : item
        )
      );
    }, 100);
  };

  return (
    <TerminalContext.Provider value={{ 
      commandHistory, 
      addToHistory,
      currentDirectory,
      setCurrentDirectory,
      clearHistory
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export default TerminalProvider;