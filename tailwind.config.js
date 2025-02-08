/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Background colors
    { pattern: /bg-(emerald|rose|blue|violet)-[0-9]+\/[0-9]+/ },
    { pattern: /bg-(emerald|rose|blue|violet)-[0-9]+/ },
    // Text colors
    { pattern: /text-(emerald|rose|blue|violet)-[0-9]+/ },
    // Border colors
    { pattern: /border-(emerald|rose|blue|violet)-[0-9]+\/[0-9]+/ },
    { pattern: /border-(emerald|rose|blue|violet)-[0-9]+/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};