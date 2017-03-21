var gulp = require('gulp');
var less = require('gulp-less');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
//var concatCss = require('gulp-concat-css');

//1. less 编译  格式化 兼容  压缩
gulp.task('style',function () { 
    return gulp.src(['src/css/*.css','!src/css/_*.css'])
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24', // Firefox 24 is the latest ESR 
      'Explorer >= 8',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'],
            cascade: false
      
    }))
    .pipe(csscomb())
    .pipe(uglifycss())
    //.pipe(concatCss('style.css'))
    .pipe(gulp.dest('dest/css'))
});

//2.JS 合并   压缩   混淆
gulp.task('script',function () {  
    gulp.src('src/js/*.js')
//    .pipe(concat('main.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('dest/js'))

})

//3.图片复制
gulp.task('image',function () {  
    gulp.src('src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))

})

//4.html压缩
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dest'))
});

//5.浏览器
var reload = browserSync.reload;
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dest/"
        }
    });
    gulp.watch("src/*.html",['html']).on("change", reload);
    gulp.watch("src/js/*.js",['script']).on("change", reload);
    gulp.watch("src/css/*.less",['style']).on("change", reload);
    gulp.watch("src/img/*.*",['image']).on("change", reload);
});