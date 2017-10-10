//Example:
const mix = require('laravel-mix');

var bowerPath = './node_modules';

// mix.copy(`${bowerPath}/font-awesome/scss`, 'src/sass/vendor/font-awesome');
mix.copy(`${bowerPath}/font-awesome/fonts`, 'dist/fonts');

mix.scripts([
  'test.js',
],'dist/js/app.js', 'src/js');

mix.js('src/js/app.js', 'dist/js')
  .sass('src/sass/app.scss', 'dist/css');
