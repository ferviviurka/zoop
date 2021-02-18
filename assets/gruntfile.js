module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch:{
            scss: {
                files: 'sass/**/*.scss',
                tasks: ['sass', 'cssmin'],
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css' : 'sass/main.scss'
                }
            }
        },

        cssmin: {
           my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
}


// npm install grunt-contrib-watch --save-dev
// npm install grunt-contrib-sass --save-dev
// npm install grunt-contrib-css --save-dev