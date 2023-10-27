/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1A1A1A',
        'secondary-bg': '#2B2B2B',
        'tertiary-bg': '#323235',
        'quaternary-bg': '#4d4d4f',
        'primary-text': '#ffffff',
        'secondary-text': '#A1A1AA',
      },
      height: {
        header: '5rem'
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

