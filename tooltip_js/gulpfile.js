
var gulp   = require('gulp'),
    sass   = require('gulp-sass');

// define the default task and add the watch task to it
gulp.task('default', ['build-css']);

gulp.task('build-css', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', ['build-css']);
});

