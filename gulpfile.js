var gulp = require('gulp');
var bem = require('gulp-bem');
var concat = require('gulp-concat');
var less = require('gulp-less');

var depsResolve = require('deps-resolver');
var walker = require('bem-walk');
var techDeps = require('tech-deps.js');

function levels(levels) {
    var deps = walker(levels)
        .pipe(techDeps())
        .pipe(depsResolve(levels));

    return function (decls) {
        return deps.resolve(decls);
    };
}


var deps = levels(['blocks']);

gulp.task('css', function () {
   return deps([{block: 'page'}])
       .pipe(bem.src('{block}.less'))
       .pipe(less())
       .pipe(concat('index.css'))
       .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
   return deps([{block: 'page'}])
       .pipe(bem.src('{block}.html'))
       .pipe(concat('index.html'))
       .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'html']);
