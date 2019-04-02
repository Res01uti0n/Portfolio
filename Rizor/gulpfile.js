`use strict`;

const gulp = require(`gulp`),
  sass = require(`gulp-sass`),
  browserSync = require(`browser-sync`),
  cssnano = require(`gulp-cssnano`),
  rename  = require(`gulp-rename`),
  imagemin = require(`gulp-imagemin`),
  pngquant = require(`imagemin-pngquant`),
  cache = require(`gulp-cache`),
  autoprefixer = require(`gulp-autoprefixer`),
  plumber = require(`gulp-plumber`);

gulp.task(`sass`, () =>{
  return gulp.src(`source/sass/**/*.scss`)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer([`last 4 versions`, `> 1%`, `ie 8`, `ie 7`], { cascade: true }))
    .pipe(gulp.dest(`source/css`))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task(`browser-sync`, ()=> {
  browserSync({
    server: {
      baseDir: `source`
    },
    notify: false
  });
});

gulp.task(`css-libs`, [`sass`], ()=> {
  return gulp.src(`source/css/**/*.css`)
    .pipe(cssnano())
    .pipe(rename({suffix: `.min`}))
    .pipe(gulp.dest(`source/css`));
});

gulp.task(`watch`, [`browser-sync`, `css-libs`], ()=> {
  gulp.watch(`source/sass/**/*.scss`, [`sass`]);
  gulp.watch(`source/**/*.html`, browserSync.reload);
});

gulp.task(`img`, ()=> {
  return gulp.src(`source/img/**/*`)
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest(`main/img`));
});

gulp.task(`build`, [`img`, `sass`,], () => {

  const buildCss = gulp.src([
    `source/css/styles.css`,
    `source/css/**/*.min.css`
  ])
    .pipe(gulp.dest(`main/css`));

  const buildFonts = gulp.src(`source/fonts/**/*`)
    .pipe(gulp.dest(`main/fonts`));

  const buildHtml = gulp.src('source/*.html')
    .pipe(gulp.dest('main'));

});

gulp.task(`work`, [`watch`]);
