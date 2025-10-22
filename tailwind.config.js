/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#280575',
        'primary-light': '#4A0FC5',
        'primary-lighter': '#6B2FD6',
        'accent': '#9D4EDD',
        'accent-light': '#C77DFF',
        'neutral': '#F8F9FA',
        'neutral-dark': '#343A40',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
