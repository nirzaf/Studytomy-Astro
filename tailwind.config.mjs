/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#F7931A',
        secondary: '#2A2A2A',
        'gray-light': '#f2f2f2',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        shine: 'shine 1s infinite',
      },
      keyframes: {
        shine: {
          'from': { transform: 'translateX(-100%) skew(-45deg)' },
          'to': { transform: 'translateX(200%) skew(-45deg)' }
        }
      }
    },
  },
  plugins: [],
}