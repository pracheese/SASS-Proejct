const {src, dest, series} = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function css(cb){
    src('src/css/styles.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('src/css'));

    cb();
}

function js(cb){
    src('src/js/script.js')
    .pipe(babel())
    .pipe(dest('src/js_final'));

    cb();
}

exports.css = css;
exports.js = js;

exports.default = series(css,js);