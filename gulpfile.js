var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    mozjpeg = require('imagemin-mozjpeg'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify');

// HTML Task
gulp.task('html', function () {
    return gulp.src('project/html/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// Css Task
gulp.task('css', function () {
    return gulp.src(['project/css/**/*.css', 'project/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

// JS task
gulp.task('js', function () {
    return gulp.src('project/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

// images task
gulp.task('img', async function () {
    gulp.src('project/images/*')
        .pipe(imagemin([
            pngquant({quality: [0.5, 0.5]}),
            mozjpeg({quality: 50})
          ]))
        .pipe(gulp.dest('dist/images'));
});

// Watch all tasks
gulp.task('watch', function() {
    require('./server.js');
    livereload.listen();
    gulp.watch(['project/css/**/*.css', 'project/css/**/*.scss'], gulp.series('css'));
    gulp.watch('project/html/*.html', gulp.series('html'));
    gulp.watch('project/js/*.js', gulp.series('js'));
    gulp.watch('project/images/*', gulp.series('img'));
});

// Select more than task as a default task
gulp.task('default', gulp.parallel('watch'));