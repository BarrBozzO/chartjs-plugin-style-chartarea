var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify");
var uglify = require("gulp-uglify");
var insert = require("gulp-insert");
var concat = require("gulp-concat");
var buffer = require("vinyl-buffer");

var outDir = "./dist";

gulp.task("build", function () {
  var build = browserify("./src/index.js")
    .ignore("chart.js")
    .bundle()
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(gulp.dest(outDir))
    // min build
    .pipe(streamify(uglify()))
    .pipe(streamify(concat("chartjs-plugin-style-chartarea.min.js")))
    .pipe(gulp.dest(outDir));

  return build;
});
