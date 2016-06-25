'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
	return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

	gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

	gulp.watch([
		path.join(conf.paths.src, '/app/**/*.css'),
		path.join(conf.paths.src, '/app/**/*.scss')
	], function (event) {
		if (isOnlyChange(event)) {
			gulp.start('styles');
		} else {
			gulp.start('inject');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function (event) {
		if (isOnlyChange(event)) {
			gulp.start('scripts');
		} else {
			gulp.start('inject');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/locales/**/*.json'), function (event) {
		if (isOnlyChange(event)) {
			gulp.start('locales');
			gulp.start('scripts');
		} else {
			gulp.start('inject');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function (event) {
		browserSync.reload(event.path);
	});
});

gulp.task('watch:build', [], function () {
	gulp.watch(path.join(conf.paths.src, '/**/*'), function (event) {
		gulp.start('build');
	});
});
