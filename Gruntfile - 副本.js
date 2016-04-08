module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        // 获取 package.json 的信息
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            domop : {
                src: ['src/js/comm.js', 'src/js/mmoc.js'],
                dest: 'dest/js/domop.js'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/js/domop.js',
                dest : 'dest/js/domop.min.js'
            }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat'); // grunt-contrib-concat 合并文件
    grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt-contrib-uglify 压缩js文件，采用UglifyJS
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify']);
};
