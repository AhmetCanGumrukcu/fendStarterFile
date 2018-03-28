'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function () {
    return gulp.src('./js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/'));
});

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest("./"))
  });

gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./views/*.pug', ['views']);
});

gulp.task('default', ["watch", "scripts","views"]);