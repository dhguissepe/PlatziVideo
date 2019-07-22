//Primero se importan los módulos que van a ser usados por postcss y se exporta con module.export

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
      }
    })
  ]

}