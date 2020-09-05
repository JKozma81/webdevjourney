const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/js/vendor', 'public/js/vendor', false);
mix.copy('resources/images', 'public/images', false);
mix.copy('resources/webfonts', 'public/webfonts', false);
mix.copy('resources/css/fontawesome-all.min.css', 'public/css/fontawesome-all.min.css', false);

mix.sass('resources/sass/main.scss', 'public/css');
mix.sass('resources/sass/noscript.scss', 'public/css');
mix.js('resources/js/main.js', 'public/js');
mix.js('resources/js/util.js', 'public/js');

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
