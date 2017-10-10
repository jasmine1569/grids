# Ui-Kit
ui-kit for beginners

## Getting Started
Welcome start by installing node_modules and creating a package.json inside your project.
```bash
$ yarn install
$ yarn init
````
## Folders
Afterwards start by creating your folders and files. You will need a ```src``` folder to hold your scss and javascript in. Then you would need a ```dist``` folder to have all your stylings and javascript from the src folder be complied down to.

## Files
Here are some files that need to be created
```bash
$ touch mix-manifest.json
$ touch webpack.mix.js
````

With in the mix-manifest.json write the path to your js and css file.
```bash
//Example:
{
    "/dist/js/app.js": "/dist/js/app.js",
    "/dist/css/app.css": "/dist/css/app.css"
}
````
With in the webpack.mix.js write the path to your js and css file.
```bash
//Example:
const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
   .sass('src/sass/app.scss', 'dist/css');
````
## Package.json
Add these scripts:
```bash
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
````

These scripts create shortcut commands

## devDependencies
```bash
$ yarn add laravel-mix
$ yarn add cross-env
$ yarn add font-awesome
````
# Webpack Commands
By adding the scripts into the package.json we are able to run these commands. 

## One-Time Compile Files For Development
```bash
$ yarn run dev
````
## One-Time Compile Files For Production
```bash
$ yarn run prod
````
## Watching Assets For Changes
```bash
$ yarn run watch
````
You may find that in certain environments Webpack isn't updating when your files change using `yarn run watch`. If this is the case on your system, consider using the `watch-poll` command:
```bash
$ yarn run watch-poll
````

