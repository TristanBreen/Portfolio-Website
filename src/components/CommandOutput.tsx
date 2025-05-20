import React from 'react';

interface CommandOutputProps {
  output: React.ReactNode;
}

const CommandOutput: React.FC<CommandOutputProps> = ({ output }) => {
  if (!output) return null;
  
  return (
    <div className="pl-6 mt-1 whitespace-pre-wrap">
      {output}
    </div>
  );
};

export default CommandOutput;