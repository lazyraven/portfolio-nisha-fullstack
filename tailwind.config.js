module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 28px 120px -35px rgba(99, 102, 241, 0.8)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.2), transparent 22%)',
      },
    },
  },
  plugins: [],
};
