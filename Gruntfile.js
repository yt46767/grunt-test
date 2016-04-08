module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        // 获取 package.json 的信息
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'src/js/comm.js',
                dest : 'dist/js/<%=pkg.name%>-<%=pkg.version%>.min.js'
            }
        },

        //jshint插件的配置信息
        jshint:{
            build: ['Gruntfile.js','src/js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat'); // grunt-contrib-concat 合并文件
    grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt-contrib-uglify 压缩js文件，采用UglifyJS
    grunt.loadNpmTasks('grunt-contrib-jshint'); // grunt-contrib-jshint 检查js语法
    // 注册任务
    grunt.registerTask('default', ['uglify','jshint']);
};
