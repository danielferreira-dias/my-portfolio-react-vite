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

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1700px) { ... }

    },
    extend: {
      colors: {
        'primary': '#BFDBFE',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // Add more custom font families as needed
      },
      keyframes: {
        scaleAndFade: {
          '0%': { transform: 'scale(1.5)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '1' },
        },
        animateLetter: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        scaleAndFade: 'scaleAndFade 2s infinite',
        animateLetter: 'animateLetter 0.5s forwards',
      },
    },
  },
  plugins: [],
}