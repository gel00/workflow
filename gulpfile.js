var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}) //pipe to another plugin; coffee and (bare) pu into a safty wrapper top level function
      .on('error', gutil.log))  //case of invalid coffeescript log the error
    .pipe(gulp.dest('components/scripts'))//pipe the result back to gulp and insert to the destination
});