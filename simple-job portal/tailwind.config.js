/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#244034',
        'secondary': '#d2f34c',
        'background': '#f2f9d8'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

