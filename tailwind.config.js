module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}', // src klasöründeki tüm HTML ve JS dosyalarını tarar
    './*.{html,js}', // Ana dizindeki HTML ve JS dosyalarını da tarar
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
