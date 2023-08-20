/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx]",
    "./components/**/*.{js,ts,jsx,tsx]",
  ],
  theme: {
    extend: {
      colors: {
        'fmc-brand-blue': '#003a0',
        'fmc-deep-blue' : '#071b45',
        'fmc-vivid-red' : '#ed484f',
        'fmc-active-red' : '#e3467d',
        'fmc-passionate-red' : '#901f49',
        'fmc-warm-gray-3' : '#cbc8c4',
        'fmc-warm-gray-2' :'#dcdad8',
        'fmc-medical-blue' : '#28aeca',
        'fmc-concise-blue' : '#00a3de',
        'fmc-effective-blue' :'#377cb5'
      }
    },
  },
  plugins: [],
}

