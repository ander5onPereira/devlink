module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: 'rgb(var(--color-text) / <alpha-value>)',
        stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
