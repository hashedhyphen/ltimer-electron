/*eslint-disable no-console*/

import fs from 'fs';

import gulp       from 'gulp';
import eslint     from 'gulp-eslint';
import babel      from 'gulp-babel';
import mkdirp     from 'mkdirp';
import browserify from 'browserify';
import babelify   from 'babelify';
import watchify   from 'watchify';

gulp.task(`default`, [ `lint`, `build`, `watch` ]);

// lint
gulp.task(`lint`, () => {
  gulp.src([ `js/src/*.js`, `gulpfile.babel.js` ])
    .pipe(eslint())
    .pipe(eslint.format());
});

// build
gulp.task(`build`, [ `babel`, `babelify` ]);

gulp.task(`babel`, () => {
  gulp.src(`js/src/index.js`)
    .pipe(babel())
    .pipe(gulp.dest(`js/build`));
});

gulp.task(`babelify`, () => {
  mkdirp.sync(`js/build`);

  browserify(`js/src/window.js`)
    .transform(babelify)
    .bundle()
    .pipe(fs.createWriteStream(`js/build/bundle.js`));
});

// watch
gulp.task(`watch`, [ `watch-lint`, `watch-babel`, `watchify` ]);

gulp.task(`watch-lint`, () => {
  gulp.watch([ `js/src/*.js`, `gulpfile.babel.js` ], [ `lint` ]);
});

gulp.task(`watch-babel`, () => {
  gulp.watch(`js/src/index.js`, [ `babel` ]);
});

gulp.task(`watchify`, () => {
  mkdirp.sync(`js/build`);

  const opts = {
    entries: `js/src/window.js`,
    cache: {},
    packageCache: {},
    plugin: [ watchify ]
  };

  const br = browserify(opts).transform(babelify);

  const bundle = () => {
    br.bundle()
      .pipe(fs.createWriteStream(`js/build/bundle.js`));
  };

  br.on(`log`, msg => console.log(`bundle.js: ${msg}`));

  br.on(`update`, bundle);
  bundle();
});
