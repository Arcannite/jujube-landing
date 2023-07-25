/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: { 
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},
        }, 
        fadeIn: {
          '0%': { opacity: 0, },
          '100%': { opacity: 1, },
        }
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out 1',
        fadeIn: 'fadeIn 1s ease-in-out 1'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'tall': { 'raw': '(min-height: 840px)' },
        'short': { 'raw': '(min-height: 630px)' },
        // => @media (min-height: 800px) { ... }
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
