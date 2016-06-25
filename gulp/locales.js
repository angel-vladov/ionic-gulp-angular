'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var angularTranslate = require('gulp-angular-translate');

gulp.task('locales', function() {
	return gulp.src(path.join(conf.paths.src, '/locales/**/*.json'))
		.pipe(angularTranslate({
			module: 'starter',
			standalone: false
		}))
		.pipe(gulp.dest(conf.paths.tmp + '/serve/app/'));
});
