var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

var builtFolder = 'www';

gulp.task('connect', function () {
  connect.server({
    root: builtFolder
  });
});

gulp.task('default', ['index', 'buildJS', 'buildCSS', 'fonts']);

filesHTML = ['./page1.html',
          './page2.html',
          './page3.html',
          './page4.html'];
gulp.task('index', function () {
  return gulp
    .src('index.html')
    .pipe(gulp.dest(builtFolder + "/html"));
});


filesJS = ['./bower_components/bower-ionic/js/ionic.bundle.min.js',
          './index.js'];

gulp.task('buildJS', function () {
  return gulp.src(filesJS)
    .pipe(concat('build.js'))
    .pipe(gulp.dest(builtFolder + "/resources/js"));
});

filesCSS = ['./bower_components/bower-ionic/css/ionic.min.css', 
          './index.css'];

gulp.task('buildCSS', function () {
  return gulp.src(filesCSS)
    .pipe(concat('build.css'))
    .pipe(gulp.dest(builtFolder + "/resources/css"));
});

fileFonts = ['./bower_components/bower-ionic/fonts/*.*'];
gulp.task('fonts', function () {
  gulp.src(fileFonts)
    .pipe(gulp.dest(builtFolder + "/resources/fonts/"));
});