const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')({
  preset: 'default'
})

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: cssnano } : {})
  }
}
