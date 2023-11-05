/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5E72E4',
      },
    },
  },
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|gray)-(200|300|400|500)/,
    },
  ],
  plugins: [require('@tailwindcss/forms')],
};
