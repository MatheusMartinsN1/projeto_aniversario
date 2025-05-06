let gulp = require('gulp')
let sass = require('gulp-sass')(require('sass'))
let sourcemaps = require('gulp-sourcemaps')
let imagemin = require('gulp-imagemin')
let uglify = require('gulp-uglify')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
}

function images() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss' , {ignoreInitial: false} , gulp.series(styles))
    gulp.watch('./src/images/*' , {ignoreInitial: false} , gulp.series(images))
    gulp.watch('./src/scripts/*.js' , {ignoreInitial: false} , gulp.series(scripts))
}
