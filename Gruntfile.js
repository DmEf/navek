module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");
	// grunt.loadNpmTasks("grunt-browser-sync");
	// grunt.loadNpmTasks("grunt-contrib-watch");
	// grunt.loadNpmTasks("grunt-postcss");
	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": ["less/style.less"]
				}
			}

		},

	// 	postcss: {
	// 		style: {
	// 			options: {
	// 				processors: [
	// 					require("autoprefixer")({browsers: 
	// 						[
	// 						"last 1 version",
	// 						"last 2 Chrome versions",
	// 						"last 2 Firefox versions",
	// 						"last 2 Opera versions",
	// 						"last 2 Edge versions"
	// 						]}),
	// 					require("css-mqpacker")({
	// 						sort: true
	// 					})

	// 				]
	// 			},
			
	// 			style: {src: "css/*.css"}
	// 		}
	// 	},

		watch: {
			style: {
				files: ["less/**/*.less"],
				tasks: ["less"]
			}
		}
		// browserSync: {
		// 	server: {
		// 		bsFiles: {
		// 			src: [".html", "css/*.css"]
		// 		},
		// 		options: {
		// 			server: "."
		// 		}
		// 	}
		// }

	// 	csso: {
	// 		style: {
	// 			options: {
	// 				report: "gzip"
	// 			},
	// 			files: {
	// 				"css/style.min.css": ["css/style.css"]
	// 			}
	// 		}
	// 	},

	// 	imagemin: {
	// 		images: {
	// 			options: {
	// 				optimizationLevel: 3
	// 			},
	// 			files: [{
	// 				expand: true,
	// 				src: ["img/**/*.{png,jpg,gif}"]
	// 			}]
	// 		}
	// 	},
	// 	copy: {
	// 		build: {
	// 			files: [{
	// 				expand: true,
	// 				src: [
	// 					"fonts/**/*.{woff,woff2}",
	// 					"img/**",
	// 					"js/**",
	// 					"*.html"
	// 				],
	// 				dest: "build"
	// 			}]
	// 		}
	// 	},
	// 	clean: {
	// 		build: ["build"]
	// 	}
		
	 });
	// grunt.registerTasks("serve", ["browserSync", "watch"]);

	// grunt.registerTasks("build", ["less", "postcss", "csso", "imagemin"]);
	// grunt.registerTasks(["watch", "less", "browserSync"]);
}; 