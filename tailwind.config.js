const colourList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]
const colorSafeList = []

for (const colorName of colourList) {
  const shades = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950
  ]

  shades.map((shade) => {
    colorSafeList.push(`text-${colorName}-${shade}`)
    colorSafeList.push(`bg-${colorName}-${shade}`)
  })
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5E72E4',
        light: {
          primary: '#F2F5FF'
        }
      },
    },
  },
  safelist: [
    ...colorSafeList,
  ],
  plugins: [require('@tailwindcss/forms')],
};
