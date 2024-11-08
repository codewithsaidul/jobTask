const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const path = require('path');

// Define paths for your source and output
const paths = {
  css: {
    src: 'css/style.css',  // Source CSS file inside the "css" folder
    dest: 'dist/css/'       // Output directory for compiled CSS
  }
};

// Task to process Tailwind with PostCSS
gulp.task('styles', function () {
  return gulp.src(paths.css.src)  // Source CSS file inside "css" folder
    .pipe(postcss([
      tailwindcss(path.join(__dirname, 'tailwind.config.js')),
      autoprefixer()
    ]))
    .pipe(cleanCSS())  // Minify the output CSS
    .pipe(gulp.dest(paths.css.dest));  // Destination folder
});

// Task to watch changes and re-run tasks automatically
gulp.task('watch', function () {
  
  return gulp.watch("css/style.css", gulp.series('styles'));  // Watch the style.css file in "css" folder
});

// Default task to run both styles and watch tasks
gulp.task('default', gulp.series('styles', 'watch'));
