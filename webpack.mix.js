//Example:
const mix = require('laravel-mix');
var bowerPath = './bower_components';

mix.copy(`${bowerPath}/font-awesome-4.7.0/scss`, 'src/sass/vendor/font-awesome');
mix.copy(`${bowerPath}/font-awesome-4.7.0/fonts`, 'dist/fonts');


mix.js('src/js/app.js', 'dist/js')
   .sass('src/sass/app.scss', 'dist/css');