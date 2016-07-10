const gulp = require('gulp');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const babel = require('rollup-plugin-babel');

gulp.task('scripts', () => {
  const settings = {
    entry: './src/main.js',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  };

  return rollup(settings)
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['scripts']);
});
