/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./tasks/level-1/task-1/**/*.{html,js,ts,jsx,tsx}",
    "./tasks/level-1/task-2/**/*.{html,js,ts,jsx,tsx}",
    "./tasks/level-1/task-3/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: "#E50914",
          "red-dark": "#B71C1C",
          gray: "#221F1F"
        },
      }
    },
  },
  // variants: {
  //   backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  //   textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus']
  // },
  plugins: [
    // function ({ addVariant, e }) {
    //   addVariant("hover", ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => {
    //       // return `@media (pointer: fine) { .${e(`hover${separator}${className}`)}:hover { ... } }`;
    //       return `@media (pointer: fine) { .${e(`hover${separator}${className}`)}:hover `;
    //     });
    //   });
    // }
  ],
}

