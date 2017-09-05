var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      open: 'external',
      baseDir: '../',
      middleware: [
        //browserSyncSpa(/^[^\.]+$/, baseDir),

        function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Headers', '*');
          next();
        }
      ]
    },
    startPath: 'Formatura/'
  });

  gulp.watch([
    'Formatura/*.html',
    'Formatura/**/*.js',
    'Formatura/**/*.css'
  ]).on('change', browserSync.reload);
});
