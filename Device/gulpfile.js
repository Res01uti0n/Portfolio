`use strict`;

const del = require(`del`);
const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const plumber = require(`gulp-plumber`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const server = require(`browser-sync`).create();
const mqpacker = require(`css-mqpacker`);
const minify = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const rollup = require(`gulp-better-rollup`);
const sourcemaps = require(`gulp-sourcemaps`);
const mocha = require(`gulp-mocha`);

gulp.task(`sass`, ()=> {
  return gulp.src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          `last 1 version`,
          `last 2 Chrome versions`,
          `last 2 Firefox versions`,
          `last 2 Opera versions`,
          `last 2 Edge versions`
        ]
      }),
      mqpacker({sort: true})
    ]))
    .pipe(gulp.dest(`main/css`))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename(`style.min.css`))
    .pipe(gulp.dest(`main/css`));
});

gulp.task(`scripts`, ()=> {
  return gulp.src(`source/js/main.js`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({}, `iife`))
    .pipe(sourcemaps.write(``))
    .pipe(gulp.dest(`main/js`));
});

gulp.task(`test`, ()=> {
  return gulp.src([`source/js/**/*.test.js`], {read: false})
    .pipe(mocha({
      compilers: [`js:babel-register`],
      reporter: `spec`
    }));
});

gulp.task(`imagemin`, [`copy`],() =>{
  return gulp.src(`main/img/**/*.{jpg,png,gif}`)
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest(`main/img`));
});


gulp.task(`copy-html`, () => {
  return gulp.src(`source/*.{html,ico}`)
    .pipe(gulp.dest(`main`))
    .pipe(server.stream());
});

gulp.task(`copy`, [`copy-html`, `scripts`, `sass`],() => {
  return gulp.src([
    `source/fonts/**/*.{woff,woff2}`,
    `source/img/*.*`
  ], {base: '.'})
    .pipe(gulp.dest(`main`));
});

gulp.task(`clean`, ()=> {
  /* return del('main');*/
});

gulp.task(`js-watch`, [`scripts`], (done) => {
  server.reload();
  done();
});

gulp.task(`serve`, [`assemble`], () => {
  server.init({
    server: `./main`,
    notify: false,
    open: true,
    port: 3502,
    ui: false
  });

  gulp.watch(`source/sass/**/*.{scss,sass}`, [`sass`]);
  gulp.watch(`source/*.html`).on(`change`, (e) => {
    if (e.type !== `deleted`) {
      gulp.start(`copy-html`);
    }
  });
  gulp.watch(`source/js/**/*.js`, [`js-watch`]);
});

gulp.task(`assemble`, [`clean`], ()=> {
  gulp.start(`copy`, `sass`);
});

gulp.task(`build`, [`assemble`, `imagemin`]);

gulp.task(`browser-sync`,()=> {
  server.init({
    server: `./source/`,
    notify: false,
    open: true,
    port: 3502,
    ui: false
  });
});

gulp.task(`sasswork`,()=>{
  return gulp.src(`source/sass/**/*.scss`)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(`source/css`))
    .pipe(server.reload({stream: true}))
});

gulp.task(`style`, [`browser-sync`],()=> {
  gulp.watch(`source/sass/**/*.scss`, [`sasswork`]);
  gulp.watch(`source/*.html`, server.reload);
});

gulp.task('work', ['style']);
