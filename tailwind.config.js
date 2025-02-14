/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind"); //import بطريقه قديمه 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",flowbite.content(), 
  ],

  theme: {
    container: {
      center: true,
      padding:'1rem',
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
};
