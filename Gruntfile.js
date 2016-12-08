module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'copy', 'hapi', 'watch'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({

        watch: {
            hapi: {
                files: [
                    './app/assets/**/*.*',
                    './app/component/**/*.{js,html}',
                    './app/filterBar/**/*.{js,html}',
                    './app/styles/**/*.css',
                    './app/template/**/*.{js,html}',
                    './app/resultList/**/*.{js,html}',
                    './app/itemInfo/**/*.{js,html}',
                    'Gruntfile.js'
                ],
                tasks: [
                    'clean',
                    'copy'
                ],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './assets/**/*.*' ],
                    dest: './dist',
                    cwd: './app'
                },  {
                    expand: true,
                    src: [ './**/*.{js,html,css}' ],
                    dest: './dist/component',
                    cwd: './app/component'
                }, {
                    expand: true,
                    src: [ './**/*.css' ],
                    dest: './dist/styles',
                    cwd: './app/styles'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html}' ],
                    dest: './dist/filterBar',
                    cwd: './app/filterBar'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html}' ],
                    dest: './dist/itemInfo',
                    cwd: './app/itemInfo'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html}' ],
                    dest: './dist/template',
                    cwd: './app/template'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html}' ],
                    dest: './dist/resultList',
                    cwd: './app/resultList'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html}' ],
                    dest: './dist/services',
                    cwd: './app/services'
                }]
            }
        },

        hapi: {
            custom_options: {
                options: {
                    server: require('path').resolve('./server'),
                    bases: {
                        '/dist': require('path').resolve('./dist/')
                    }
                }
            }
        },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');

};
