module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'copy', 'hapi', 'watch'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({

        watch: {
            hapi: {
                files: [
                    './app/assets/**/*.{png,jpg,jpeg,mp3}',
                    './app/component/**/*.{js,html,css}',
                    './app/form/**/*.{js,html,css}',
                    './app/layout/**/*.{js,html,css}',
                    './app/result/**/*.{js,html,css}',
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
                    src: [ './assets/**/*.{png,jpg,jpeg,mp3}' ],
                    dest: './dist',
                    cwd: './app'
                },  {
                    expand: true,
                    src: [ './**/*.{js,html,css}' ],
                    dest: './dist/component',
                    cwd: './app/component'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html,css}' ],
                    dest: './dist/form',
                    cwd: './app/form'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html,css}' ],
                    dest: './dist/template',
                    cwd: './app/template'
                }, {
                    expand: true,
                    src: [ './**/*.{js,html,css}' ],
                    dest: './dist/result',
                    cwd: './app/result'
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
