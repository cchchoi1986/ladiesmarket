var gulp = require('gulp'),
    uglify = require('gulp-uglify')
    sass = require('gulp-sass')
    livereload = require('gulp-livereload');

// gulp.task('scripts', function () {
//     gulp.src('app/js/*.js')
//         .on('error', console.error.bind(console))
//         .pipe(gulp.dest('public/js'));
// });

gulp.task('styles', function () {
    gulp.src('app/scss/*.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    // gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['styles']);
    var server = livereload({start: true});
});

gulp.task('default', ['styles', 'watch']);