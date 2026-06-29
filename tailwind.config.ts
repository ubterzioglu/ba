import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001f3f', // lacivert
        secondary: '#00509e', // mavi
        accent: '#008080', // nefti yeşil
        light: '#f0f4f8',
        dark: '#0a192f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
