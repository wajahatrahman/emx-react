/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(emerald|rose|cyan|purple|pink)-(100|500|600|700|800|900)/,
      variants: ['hover', 'group-hover'],
    },
    {
      pattern: /from-(emerald|rose|cyan|purple|pink)-(100|500|600|700|800|900)/,
      variants: ['hover', 'group-hover'],
    },
    {
      pattern: /to-(emerald|rose|cyan|purple|pink)-(100|500|600|700|800|900)/,
      variants: ['hover', 'group-hover'],
    },
    'opacity-20',
    'opacity-30',
    'ring-offset-gray-800'
  ]
};