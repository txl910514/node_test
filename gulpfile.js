var gulp=require('gulp'),
  connect = require('gulp-connect'); //自动刷新

gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true
  });
});


gulp.task('default', ['connect']);