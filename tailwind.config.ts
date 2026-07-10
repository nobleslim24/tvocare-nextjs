import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#dbaf4b',
          500: '#d4af37',
          900: '#5e4416',
          950: '#36250b',
        },
        black: {
          pure: '#080808',
          rich: '#121212',
          card: '#1a1a1a',
          border: '#2a2a2a',
          muted: '#3a3a3a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7 - 1rem * 7))' },
        }
      }
    },
  },
  plugins: [],
}
export default config
