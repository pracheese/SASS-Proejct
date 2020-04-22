const {src, dest} = require('gulp');
const sass = require('gulp-sass');

function css(cb){
    src('src/css/styles.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('src/css'));

    cb();
}

exports.default = css;