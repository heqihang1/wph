let g = require("gulp")
let htmlmin = require("gulp-htmlmin")
let csshtml = require("gulp-clean-css")
let uglify = require("gulp-uglify")
let babel = require("gulp-babel")
let sass = require("gulp-sass")
let connect = require("gulp-connect")
g.task("watchadd",async()=>{
    g.watch("./www/*.html",async()=>{
        g.src("./www/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
        }))
        .pipe(g.dest("d:\\phpStudy\\www\\wph"))

    })
    g.watch("./www/css/*.css",async()=>{
        g.src(["./www/css/*.css","!./www/css/*.scss"])
        .pipe(csshtml())
        .pipe(g.dest("d:\\phpStudy\\www\\wph\\css"))
    })
    g.watch("./www/css/*.scss",async()=>{
        g.src("./www/css/*.scss")
        .pipe(sass())
        .pipe(csshtml())
        .pipe(g.dest("d:\\phpStudy\\www\\wph\\css"))
    })

    g.watch("./www/js/*.js",async()=>{
        g.src("./www/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(g.dest("d:\\phpStudy\\www\\wph\\js"))
        
    })
    g.watch("./www/php/**/*",async()=>{
        g.src("./www/php/**/**").pipe(g.dest("d:\\phpStudy\\www\\wph\\php"))
    })
    
    
})
g.task("imagemin",async()=>{
        g.src("./www/images/**/*").pipe(g.dest("d:\\phpStudy\\www\\wph\\images"))
})
g.task("server",function(){
    connect.server({
        root:"d:\\phpStudy\\www\\wph",
        livereload: true
    })
})