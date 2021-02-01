var gulp = require('gulp');
// var gulpUglify = require('gulp-uglify');

gulp.task('default', async function () {
  gulp
   .src(['./node_modules/alpinejs/dist/*.js'])
//    .pipe(gulpUglify())
   .pipe(gulp.dest('./public/dist/alpinejs/'));
});