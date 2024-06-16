/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary) / <alpha-value>)',
        'primary-accent': 'rgba(var(--primary-accent) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
        'secondary-accent': 'rgba(var(--secondary-accent) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      playwrite: ['Playwrite CO', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
