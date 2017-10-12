var gulp = require('gulp'), // de facto javascript dependency statement
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',

];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}) //pipe to another plugin; coffee and (bare) pu into a safty wrapper top level function
      .on('error', gutil.log))  //case of invalid coffeescript log the error
    .pipe(gulp.dest('components/scripts'))//pipe the result back to gulp and insert to the destination
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
})