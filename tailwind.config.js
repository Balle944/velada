/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#bc13fe',
        'cyber-black': '#0c0c0c',
        'cyber-dark': '#121212',
        'cyber-gray': '#1e1e1e',
        'cyber-light': '#2a2a2a'
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      animation: {
        'glow-blue': 'glow-blue 2s ease-in-out infinite alternate',
        'glow-pink': 'glow-pink 2s ease-in-out infinite alternate',
        'flicker': 'flicker 5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'glow-blue': {
          '0%': { textShadow: '0 0 5px rgba(0, 243, 255, 0.7), 0 0 10px rgba(0, 243, 255, 0.5)' },
          '100%': { textShadow: '0 0 10px rgba(0, 243, 255, 0.9), 0 0 20px rgba(0, 243, 255, 0.7), 0 0 30px rgba(0, 243, 255, 0.5)' }
        },
        'glow-pink': {
          '0%': { textShadow: '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(255, 0, 255, 0.5)' },
          '100%': { textShadow: '0 0 10px rgba(255, 0, 255, 0.9), 0 0 20px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.5)' }
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' }
        }
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 10px #00f3ff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff',
        'neon-purple': '0 0 5px #bc13fe, 0 0 10px #bc13fe'
      },
      backgroundImage: {
        'cyber-grid': "url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg')",
        'cyber-stadium': "url('https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg')"
      }
    },
  },
  plugins: [],
};