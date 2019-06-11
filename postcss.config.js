module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-custom-selectors'),
    require('postcss-preset-env')({
      stage: 1,
      preserve: false // Valor por defecto de "true".Se asemeja a customProperties
      //cambiar a false para notar el cambio
    }),
  ]
}
