const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', () => {
    gulp.watch('./app/sass/**/*.scss', ['sass'])
})