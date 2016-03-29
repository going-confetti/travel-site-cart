var gulp = require('gulp');
var runSequence = require('run-sequence');
var bem = require('gulp-bem');
var concat = require('gulp-concat');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

var levels = ['blocks'];
var tree = bem(levels);

gulp.task('less', function() {
    return tree.deps('blocks/page')
        .pipe(bem.src('{bem}.less'))
        .pipe(less())
        .pipe(concat('index.css'))
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
        .pipe(csscomb())
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
    return tree.deps('blocks/page')
       .pipe(bem.src('{bem}.html'))
       .pipe(concat('index.html'))
       .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return tree.deps('blocks/page')
       .pipe(bem.src('{bem}.js'))
       .pipe(concat('app.js'))
       .pipe(gulp.dest('dist'));
});

gulp.task('build', ['less', 'html', 'js']);

gulp.task('build-dev', function() {
    runSequence('build', 'watch');
});

gulp.task('watch', function() {
    gulp.watch('./blocks/**/*.less', ['less']);
    gulp.watch('./blocks/**/*.html', ['html']);
    gulp.watch('./blocks/**/*.js', ['js']);
});

gulp.task('default', function() {
    console.log('\nWelcome to gulp');
    console.log('Use \'gulp build to build the page.\'\n');
});
