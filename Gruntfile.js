module.exports = function(grunt) {

  grunt.initConfig({
    favicons: {

      options: {
        trueColor: true,
        precomposed: true,
        windowsTile: true,
        tileBlackWhite: true,
        tileColor: "auto",
      },
      white: {
        src: 'src/favicon-white.png',
        dest: 'build/white',
        options: {
          html: 'build/white.html',
          HTMLPrefix: "/white/"
        }
      },
      blue: {
        src: 'src/favicon-blue.png',
        dest: 'build/blue',
        options: {
          html: 'build/blue.html',
          HTMLPrefix: "/blue/"
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-favicons');

  grunt.registerTask('default', ['favicons']);

};