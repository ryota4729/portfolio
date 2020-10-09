var gulp = require("gulp");

var sass = require("gulp-sass");

gulp.task("sass",function(){
  return gulp.src("dist/scss/*.scss")

  .pipe(sass({
    outputStyle: "expanded"
  }))

  .pipe(gulp.dest("src/css"));
});

gulp.task("watch",function(){
  gulp.watch("dist/scss/*.scss",gulp.task("sass"));
});