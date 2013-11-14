module.exports = function(grunt) {

  grunt.initConfig({
    favicons: {
      options: {
        trueColor: true,
        precomposed: true,
        appleTouchBackgroundColor: "#e2b2c2",
        windowsTile: true,
        tileBlackWhite: false,
        tileColor: "auto",
        html: 'build/out/index.html',
        HTMLPrefix: "/images/icons/"
      },
      icons: {
        src: 'src/favicon.png',
        dest: 'build/images/icons'
      }
    },
  });

  grunt.loadNpmTasks('grunt-favicons');

  grunt.registerTask('default', ['favicons']);

};