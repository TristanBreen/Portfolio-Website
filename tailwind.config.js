/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          background: '#282a36',
          foreground: '#f8f8f2',
          selection: '#44475a',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c'
        }
      },
      fontFamily: {
        terminal: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'typing': 'typing 3.5s steps(40, end)'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        }
      },
    },
  },
  plugins: [],
};