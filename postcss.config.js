module.exports = {
  // plugins:{
  //   tailwindcss:{config: './tailwind.config.js'},
  // },
  purge:[
    // './public/**/*.html',
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
  ]
}