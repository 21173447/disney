/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     

      backgroundImage: {
        'hero': "url('/src/images/pexels-ithalu-907485.jpg')",
       
       
      },
    },
  },
  plugins: [


  ],
}
