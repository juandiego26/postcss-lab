module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-apply'),
    require('postcss-preset-env')({
      stage: 1,
      autoprefixer: {
        grid: true,
      },
      preserve: true // Valor por defecto de "true".Se asemeja a customProperties
      //cambiar a false para notar el cambio
    }),
    require('postcss-color-hwb'),
    require('postcss-custom-selectors')
  ]
}
