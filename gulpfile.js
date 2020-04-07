// gulp.task('replace_webpackJsonp', function() {
//     gulp.src(["./dist/login-app.js"])
//       .pipe(replace('webpackJsonp', 'webpackJsonpB'))
//       .pipe(gulp.dest('./dist/login-app.js'))
//   });
var gulp = require('gulp');
var replace = require('gulp-string-replace');

  function defaultTask(cb) {
    gulp.src(["./dist/login-app/login-app.js"])
    .pipe(replace('webpackJsonp', 'webpackJsonpL'))
    .pipe(gulp.dest('./dist'))
    
    cb();
  }
  
  exports.default = defaultTask;
