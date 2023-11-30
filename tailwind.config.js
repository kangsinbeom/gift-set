/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: 'oklch(45% 0.2 270)'
    },
    spacing: {
      'sm': '4px',
      'md': '8px',
      'lg': '12px'
    },
    extend: {},
  },
  plugins: [],
}

