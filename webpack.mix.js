//Example:
const mix = require('laravel-mix');
var bowerPath = './bower_components';

mix.js('src/js/app.js', 'dist/js')
  .sass('src/sass/app.scss', 'dist/css');
