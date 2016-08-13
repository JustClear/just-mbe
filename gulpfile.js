'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer');

// Styles task
gulp.task('styles', function() {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass({
		outputStyle: 'compact',
	}))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify({
		message: 'Styles task completed'
	}));
});

// Default task
gulp.task('default', ['styles']);

// Watch
gulp.task('watch', function() {
	// Watch .scss files
	gulp.watch('./sass/**/*.scss', ['styles']);
});
