module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/js/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'green',   // cấu hình màu primary
            100: '#008000',     // có thể cấu hình sâu hơn về màu sắc của primary
          },
        },
      },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
  };