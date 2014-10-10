module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		// read package.json content
		pkg: grunt.file.readJSON('package.json'),

		// uglify tasks
		uglify: {
			options: {
				preserveComments: 'some',
				banner: '/*! <%= pkg.name %> | v<%= pkg.version %> | <%= pkg.author %> | <%= pkg.license %> | <%= pkg.homepage %>  */ \n\n'
			},
			build: {
				src: 'src/index.js',
				dest: 'src/index.min.js'
			}
		},

		// watch tasks
		watch: {
			script: {
				files: ['src/index.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			}
		}

	});

	// register tasks
	grunt.registerTask('default', ['uglify', 'watch']);
};