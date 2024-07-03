/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '345px',
      // => @media (min-width: 345px) { ... }

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdlg': '910px',
      // => @media (min-width: 910px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgxl': '1070px',
      // => @media (min-width: 1070px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1700px) { ... }

    },
    extend: {
      height: {
        '128': '32rem',
        '176': '44rem',
      },
      colors: {
        'primary': '#BFDBFE',
        'card-color': '#1e1e1f',
        'custom-gold': '#96885f',
        'custom-black': '#161616',
        'custom-black-sec': '#0e0e0e',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // Add more custom font families as needed
      },
      keyframes: {
        animateLetter: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        animateLetter: 'animateLetter 0.5s forwards',
      },
    },
  },
  plugins: [],
}