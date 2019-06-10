# Postcss-project
1. Use Postcss CLI https://github.com/postcss/postcss-cli


## Use
1. Install PostCSS CLI
2. On terminal `$ npm i -D postcss-cli`
3. Verify version `$ npx postcss --version`
4. verify helpers `$ npx postcss --help`
5. Output files `$ npx postcss src/css/home.css -o dist/css/home.css`
6. Output watch `$ npx postcss src/css/home.css -o dist/css/home.css -w`

## Plugin autoprefixer
1. install `$ npm i -D autoprefixer`
2. run `npx postcss src/css/home.css -o dist/css/home.css -w -u autoprefixer`
3. create file `$touch postcss.config.js`

## plugin postcss-preset-env
1. install `$ npm i -D postcss-preset-env`
2. use in file `postcss.config.js`

```js
module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
      }
    })
  ]
}
```

## Skills applied
1. postCSS post processor

Skills applied: https://platzi.com/clases/postcss/

Any question? contact me silgajuandiego@gmail.com