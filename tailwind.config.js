module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { 300: "#8ac190", 400: "#3fcc80", "400_7f": "#3fcc807f" },
        white: {
          A700_3a: "#ffffff3a",
          A700_99: "#ffffff99",
          A700_19: "#ffffff19",
          A700_4c: "#ffffff4c",
          A700_63: "#ffffff63",
          A700_28: "#ffffff28",
          A700: "#ffffff",
          A700_33: "#ffffff33",
          A700_37: "#ffffff37",
          A700_e5: "#ffffffe5",
          A700_87: "#ffffff87",
          A700_02: "#ffffff02",
        },
        light_blue: {
          500: "#009dff",
          600: "#089df1",
          "500_01": "#08abf1",
          A700: "#009af1",
          "600_01": "#0ea5e9",
          "400_b2": "#31b5ffb2",
          "500_4c": "#009dff4c",
        },
        black: {
          900: "#000000",
          "900_01": "#0a0a0a",
          "900_0c": "#0000000c",
          "900_cc": "#000000cc",
          "900_33": "#06070a33",
        },
        blue_gray: {
          100: "#d9d9d9",
          700: "#525252",
          900: "#333333",
          "900_cc": "#333333cc",
        },
        deep_purple: { 900: "#291890", A200: "#6355ff", A200_7f: "#6355ff7f" },
        pink: { 300: "#ff55a6" },
        blue: {
          400: "#55a3ff",
          700: "#106ad5",
          800: "#0159dd",
          900: "#195aa8",
          "400_7f": "#55a3ff7f",
        },
        indigo: { A700_b2: "#0019ffb2", A700: "#082df1" },
        red: { 500: "#f53649", A200: "#ff5555" },
        orange: { 300: "#ffa756", "300_7f": "#ffa7567f" },
        gray: {
          50: "#fafafa",
          100: "#f7f7f7",
          500: "#999999",
          700: "#6a6a6a",
          900: "#0e0f2d",
          "500_01": "#a3a3a3",
          "500_02": "#89a38b",
          "900_02": "#171717",
          "900_03": "#191a1e",
          "900_01": "#262626",
        },
      },
      fontFamily: { inter: "Inter", raleway: "Raleway", epilogue: "Epilogue" },
      backgroundImage: {
        gradient: "linear-gradient(142deg ,#31b5ffb2,#0019ffb2,#31b5ffb2)",
        gradient1: "linear-gradient(200deg ,#089df1,#082df1,#08abf1)",
      },
      boxShadow: {
        bs: "0px 0px  1px 4px #ffffff02",
        bs2: "0px 5px  35px 0px #0159dd",
        bs1: "0px 5px  35px 0px #0000000c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
