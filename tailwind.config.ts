import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff5d10', // Main brand orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          500: '#375278', // Dark blue
          600: '#2d4563',
          700: '#243751',
        },
        accent: {
          500: '#931919', // Burgundy accent
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      lineHeight: {
        relaxed: '1.6',
      },
    },
  },
  plugins: [],
}
export default config
