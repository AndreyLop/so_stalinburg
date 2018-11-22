var gulp = require('gulp'),
	sass = require('gulp-sass');
  
var sassConfig = {
	inputDirectory: './src/scss/**/*.scss',
	outputDirectory: 'dist/css',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('build', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('watch', function() {
	gulp.watch('./src/scss/**/*.scss', ['build']);
});