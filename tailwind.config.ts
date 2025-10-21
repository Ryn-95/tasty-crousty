import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        roseMiami: '#FF5EAA',
        turquoiseBeach: '#5EE9FF',
        violetSoflo: '#AE52FF',
        sunsetOrange: '#FF8B5E',
        midnight: '#0A0120',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 4s infinite',
        'pulse-slow': 'pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%, 22%, 64%': { opacity: '1' },
          '30%, 60%': { opacity: '0.4' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.96)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 94, 170, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 94, 170, 0.6), 0 0 40px rgba(255, 94, 170, 0.4)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '100': '100',
      },
      scrollSnapType: {
        'y-proximity': 'y proximity',
      },
    },
  },
  plugins: [
    forms,
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.scroll-snap-y-proximity': {
          'scroll-snap-type': 'y proximity',
        },
        '.scroll-snap-start': {
          'scroll-snap-align': 'start',
        },
        '.scroll-snap-center': {
          'scroll-snap-align': 'center',
        },
        '.scroll-snap-end': {
          'scroll-snap-align': 'end',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config 