var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

var builtFolder = 'www-mobile';

gulp.task('connect', function () {
  connect.server({
    root: builtFolder
  });
});

gulp.task('default', ['index', 'buildJS', 'buildCSS', 'fonts', 'libJS']);

filesHTML = ['./page1.html',
            './page1.html',
            './page2.html',
            './page3.html',
            './page4.html',
            './page5.html'];
gulp.task('index', function () {
  return gulp
    .src(filesHTML)
    .pipe(gulp.dest(builtFolder + "/html"));
});

filesJS = ['./bower_components/bower-ionic/js/ionic.bundle.min.js',
          './index.js'];

gulp.task('buildJS', function () {
  return gulp.src(filesJS)
    .pipe(concat('build.js'))
    .pipe(gulp.dest(builtFolder + "/resources/js"));
});

libJS = [
  './bower_components/bower-ionic/js/ionic.bundle.min.js'
];
gulp.task('libJS', function () {
  return gulp.src(libJS)
    .pipe(concat('lib.js'))
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
