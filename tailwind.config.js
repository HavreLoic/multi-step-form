/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update paths to your components and templates
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "Marine blue": "hsl(213, 96%, 18%)",
        "Purplish blue": "hsl(243, 100%, 62%)",
        "Pastel blue": "hsl(228, 100%, 84%)",
        "Light blue": "hsl(206, 94%, 87%)",
        "Strawberry red": "hsl(354, 84%, 57%)",

        // Neutral
        "Cool gray": "hsl(231, 11%, 63%)",
        "Light gray": "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "Sans"],
    },
    screens: {
      xs: "200px",
      sm: "475px",
      md: "880px",
      lg: "1440px",
      xl: "1280px",
    }, // Add your custom theme configurations here
  },
  plugins: [], // Add any Tailwind plugins here
};
