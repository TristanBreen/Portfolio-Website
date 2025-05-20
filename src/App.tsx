import React from 'react';
import Terminal from './components/Terminal';
import TerminalProvider from './context/TerminalContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 md:p-8">
      <TerminalProvider>
        <Terminal />
      </TerminalProvider>
    </div>
  );
}

export default App;