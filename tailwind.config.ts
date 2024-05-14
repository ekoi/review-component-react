import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: {
          50: "#DAE3F6",
          100: "#B5C6ED",
          200: "#7090DC",
          300: "#305BC0",
          400: "#1E3A79",
          500: "#193066",
          600: "#142752",
          700: "#0F1D3D",
          800: "#0A1329",
          900: "#050A14",
          950: "#020408",
        },
        blue: {
          50: "#ECF1F8",
          100: "#D6E0F0",
          200: "#ADC2E1",
          300: "#83A3D2",
          400: "#5C85C4",
          500: "#406DB0",
          600: "#34588E",
          700: "#264169",
          800: "#1A2C47",
          900: "#0C1522",
          950: "#070C13",
        },
        light_blue: {
          50: "#DBF7FF",
          100: "#B3EEFF",
          200: "#6BDFFF",
          300: "#1FCEFF",
          400: "#00A7D4",
          500: "#008CB3",
          600: "#00708F",
          700: "#00546B",
          800: "#003847",
          900: "#001C24",
          950: "#000C0F",
        },
        yellow: {
          50: "#FFFAE0",
          100: "#FFF7C7",
          200: "#FFEE8F",
          300: "#FFE552",
          400: "#FFDE1B",
          500: "#EBC700",
          600: "#BDA000",
          700: "#8F7900",
          800: "#5C4E00",
          900: "#2E2700",
          950: "#191600",
        },
      },
    },
  },
  plugins: [],
};
export default config;
