module.exports = function(grunt) {
  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ["./app/static/css"],
          yuicompress: true
        },
      files: {
        "./app/static/css/styles.css": "./app/static/less/styles.less"
      }
    }
  },
  // running `grunt watch` will watch for changes
  watch: {
    files: "./app/static/less/*.less",
    tasks: ["less"]
  }
});
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};