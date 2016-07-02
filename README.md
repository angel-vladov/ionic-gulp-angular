# ionic-seed

Ionic starter project based on [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/usage.md) generated code. 
When in doubt how to use this project reference Gulp Angular Generator documentation. 

## Intro

### Install
Install the necessary dependencies in the project folder.

```
$ npm install
$ bower install
```

### Module Setup
App module name is "__starter__". If you want to use this as a skeleton for your Ionic project

* Find all occurrences of `starter` in JS and JSON files 
* Replace `starter` them with your project name.
* Open `index.html` and replace `ng-app="starter"` with your project name.

_Since Ionic 2 and Angular 2 are just around the corner I don't see the need to create a Yeoman generator._

### Directory Structure

[Best Practice Recommendations for Angular App Structure](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/usage.md#directory-structure)

* The project uses "Best Practice Recommendations for Angular App Structure". __It's important to read the recommendations. Don't omit this step.__
* Unit tests are named *.specs.js and *.mock.js and are located in the respective components folders.
* You'll have the default Ionic Starter Project implemented in the Angular best practices. Do follow this structure. You'll find it rewarding when working on large projects.

__Warning:__ the first file of a type in a folder is often missed by the Gulp watch, try to relaunch Gulp if it happens.

### Features

List of features included in the project:
* SASS
* bower to manage dependencies
* ng-cordova (_no cordova plugins installed, only the js library_)
* ionic
* eslint
* Unit tests with Karma and Jasmine

Bower JSON is updated to include all the necessary overrides for the project to work out of the box without the need for you to change anything.

### Gulp Tasks
Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in /dist
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp` test to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in __Gulp Angular Generator__ [User Guide](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/how-it-works.md) .  

## Local Testing
### Serve
You can test locally by using `gulp serve`. It runs with BrowserSync.

There is a mocked cordova.js in `src/mocks` folder. It will be served instead of the original cordova.js when testing in the browser.

### Disable CORS
When developing a Cordova app you'll need CORS turned off. On Chrome you can do this in 2 ways:

* Add `--disable-web-security --user-data-dir` to you Chrome shortcut. Before testing kill all chrome tasks and then run the browser again

  __OR__
  
* Install a CORS disabling extension from the Chrome Store.

## Building

You'll notice that `www` folder doesn't exist. This folder is required for your Cordova app to run. 
Run `gulp build` to generate the `www` folder.
You'll need to always run `gulp build` __before running__ ionic run or build tasks.

__Example:__
```
$ gulp build
$ ionic run ios
```

## Recipes

### Localization
There is included support for angular-translate if you need localization.
To use angular-translate

* Install the library: `$ bower install angular-translate --save`
* Create `locale` folder in `src/app`
* For each language create a locale JSON. Name format is `locale-<LANGUAGE>.json`.
  __Example:__ `locale-en.json`, `locale-de.json`
* Open `src/app/index.module.js` and uncomment `pascalprecht.translate`.

Run `gulp serve`. There is already an existing `locale` gulp task. It will generate a javascript file from all your JSON files.  

__You don't need to load the JSON files manually__.

### Mocking Cordova Plugins

As already mentioned, there is a mocked cordova.js - `app/src/mocks/cordova.js`.
Mock any Cordova module you need in this file. This will ensure you can continue testing in the browser without errors.
There is one mocked Cordova plugin used by $cordovaAppVersion.