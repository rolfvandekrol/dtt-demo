/// <binding />
var gulp = require("gulp");

// Plugins for CSS compiling
var sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS     = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    mmq          = require('gulp-merge-media-queries');

gulp.task("default", ['stylesheets']);

gulp.task('stylesheets', function() {
  return gulp.src('./web/themes/demo/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(mmq({log: false}))
    .pipe(autoprefixer({browsers: ['> 2%', 'last 2 versions'], cascade: false}))
    .pipe(gulp.dest("./web/themes/demo/dist"))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./web/themes/demo/dist"))
});

gulp.task('watch', ['default'], function(callback) {
  gulp.watch('./web/themes/custom/deep_sea/scss/**/*.scss', ['stylesheets']);
});
