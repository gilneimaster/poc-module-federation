const gulp = require('gulp');
const { exec } = require('child_process');
const clean = require('gulp-clean');

const config = {
  libDestPath: 'dist/lib-default/',
  libDestPackages: 'packages',
};

function cleanTarball() {
  console.log('clean tarball');
  return gulp.src(`${config.libDestPackages}`, { allowEmpty: true })
    .pipe(clean())
}

function pack() {
  console.log('packing project');
  return exec(`cd ${config.libDestPath} && npm pack`);
}

function moveTarball() {
  console.log('moving tarball');
  return gulp.src(`${config.libDestPath}/*.tgz`)
    .pipe(clean())
    .pipe(gulp.dest(`${config.libDestPackages}`));
}

const run = gulp.series(cleanTarball, pack, moveTarball);


exports.default = run
