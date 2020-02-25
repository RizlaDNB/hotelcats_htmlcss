const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function images () {
    return gulp.src('./img/**/*.{png,jpg,svg}')
        .pipe(imagemin ([
            imagemin.optipng({quality: 75, optimizationLevel: 3}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('./img'));
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch ('./scss/**/*.scss', style);
    gulp.watch ('./*.html').on('change', browserSync.reload);
    gulp.watch ('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.images = images;
exports.watch = watch;