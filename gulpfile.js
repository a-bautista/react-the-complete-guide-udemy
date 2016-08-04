/**
 * Created by alexbr on 8/3/16.
 */
/**
 * Created by alexbr on 8/3/16.
 */
/**
 * Created by alexbr on 7/2/16.
 */
/*var gulp = require('gulp');
 var react = require('gulp-react');
 var concat = require('gulp-concat');

 gulp.task('default',function(){ //default runs everything down below
 return gulp.src('src/**') //return everything that is inside the src by using the **
 .pipe(react()) //convert jsx to js
 .pipe(concat('application.js')) //join all the files
 .pipe(gulp.dest('./')) //save this file in the current working directory (ReactBasics_003
 });*/

var gulp = require('gulp');
var gutil = require('gulp-util'); //it prints info in the command line to debug
var source = require('vinyl-source-stream'); //it handles text files from one part of the text files to another
var browserify = require('browserify'); //it figures out which part of the code depends on the other
var watchify = require('watchify'); //it automatically runs our gulp tool for converting the jsx to js
var reactify = require('reactify'); //it helps browserify to see which part depends on the other

gulp.task('default',function(){
    //create the bundler object which starts the app.jsx, converts all the jsx to js,
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        //be careful!!! this is the only .jsx file but the files with this extension should be in one folder
        transform: [reactify], //it tells browserify it needs to transform the jsx to js while browserify determine
        // which files are dependant on others
        extensions: ['.jsx'], //look for the jsx files
        debug:true,
        cache:{},
        packageCache:{},
        fullPaths: true
    }));

    //start running build, compile the files and join them together
    function build(file){
        if(file) gutil.log('Recompiling... '+file);
        return bundler
            .bundle()
            .on('error',gutil.log.bind(gutil,'Browserify error')) //it throws out errors in console
            .pipe(source('main.js')) //put the main.js into the current working directory
            .pipe(gulp.dest('./')); //current directory


    };
    build() //run the function
    bundler.on('update',build) //update every change
});





