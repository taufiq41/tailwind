var gulp = require('gulp');

gulp.task('default', async function () {
  gulp
   .src(['./node_modules/alpinejs/dist/*.js'])
   .pipe(gulp.dest('./public/dist/alpinejs/'));
});