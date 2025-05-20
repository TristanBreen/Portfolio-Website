import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="mb-6">
      <pre className="text-terminal-cyan mb-4 hidden sm:block">
{`
 _____ ___ ___ _____ _   _  _   _  _ ___ ___  ___ ___ _____ ___ ___  _    ___ ___ 
|_   _| _ \_ _/ __| |_| \| | /_\\ | \\| / __| _ \\/ _ \\_ _|_   _| __/ _ \\| |  |_ _/ _ \\
  | | |   /| |\\__ \\ -_| .  |/ _ \\| .  \\__ \\   /| (_) | |  | | | _| (_) | |__ | | (_) |
  |_| |_|_\\\\___/___/\\___|_|\\_/_/ \\_\\_|\\_|___/|_|\\\\___/___| |_| |___\\___/|____|___\\___/ 
`}
      </pre>
      <pre className="text-terminal-cyan mb-4 sm:hidden">
{`
 _____ ___ ___ ___ 
|_   _| _ \\ __|__ \\
  | | |   / _| /_/
  |_| |_|_\\___|(_) 
`}
      </pre>
      <p className="text-terminal-foreground mb-1">Welcome to my interactive terminal portfolio!</p>
      <p className="text-terminal-comment mb-3">Type <span className="text-terminal-yellow">help</span> to see available commands.</p>
    </div>
  );
};

export default Banner;