/**
 * Created by root on 12/08/16.
 */
var util = require('util');
/*  当前进程的进程号*/
/*console.log(process.pid);*/

/*Node的版本，比如v0.10.18。*/
/*console.log(process.version);*/

/*包含安装路径；*/
/*console.log(process.installPrefix);*/


//提供一个对象,包含Node.js应用程序所需的模块和版本
/*console.log(process.versions);*/

/*获取或者设置group id；*/
/*process.setgid(1);*/
/*console.log(process.getgid());*/

/*获取或者设置group id；*/
/*process.setuid(2);*/
/*console.log(process.getuid());*/

//用于编译当前节点可执行程序的配置选项
/*console.log('Node Config: ' +  JSON.stringify(process.config));*/

//进程正在运行的处理器体系结构
/*console.log('Process Architecture: ' + process.arch);*/

//Node.js进程的当前内存使用情况可使用util.inspect()读取
/*node进程内存的使用情况，rss代表ram的使用情况，vsize代表总内存的使用大小，包括ram和swap；*/
/*console.log('Memory Usage: ' + util.inspect(process.memoryUsage()));*/

/*process.heapTotal,process.heapUsed：分别代表v8引擎内存分配和正在使用的大小。*/
console.log(process.heapTotal);
console.log(process.heapUsed);

//返回一个高精确的时间
/*var start = process.hrtime();
console.log(start);
setTimeout(function() {
  var delta = process.hrtime(start);
  console.log(delta);
  console.log('High-Res timer took %d seconds and %d nanoseconds',
  delta[0], + delta[1]);
  console.log('Node has been running %d seconds', process.uptime());
}, 1000);*/

/*包含当前进程运行的时长（秒）；*/
/*console.log(process.uptime());*/

/*当前系统平台，比如Linux。*/
/*console.log(process.platform);*/

/*默认值为“node”，可以自定义该值。*/
/*console.log(process.title);*/

/*当前进程的命令行参数数组*/
/*console.log("argv: ",process.argv);
console.log("argc: ",process.argc);*/

/*指向当前shell的环境变量，比如process.env.HOME。*/
/*console.log(process.env.HOME);
console.log(process.env);*/

/*运行当前进程的可执行文件的绝对路径。*/
/*console.log(process.execPath);*/

/*指向标准输出。*/
/*console.log(process.stdout);*/
/*exports.log = function() {
  process.stdout.write(format.apply(this, arguments) + '\n');
};*/

/*指向标准输出。*/
/*console.log(process.stdin);*/

/*指向标准错误。*/
/*console.log(process.stderr);*/

//用于启动应用程序的特定节点的命令行选项
/*console.log('Execution Args:' + JSON.stringify(process.execArgv));
console.log(process.execArgv);*/


/*方法*/
/*process.nextTick()的例子，指定下次事件循环首先运行的任务。*/
/*process.nextTick(function () {
  console.log('Next event loop!');
});*/

/*退出当前进程。*/
/*process.exit();*/

/*返回运行当前脚本的工作目录的路径。_*/
/*process.cwd();*/

/*改变工作目录。*/
/*process.chdir('/home/bbb');*/



/*事件*/
/*当前进程退出时，会触发exit事件，可以对该事件指定回调函数。这一个用来定时检查模块的状态的好钩子(hook)(例如单元测试),
当主事件循环在执行完’exit’的回调函数后将不再执行,所以在exit事件中定义的定时器可能不会被加入事件列表.*/
/*process.on('exit', function () {
/!*  fs.writeFileSync('/tmp/myfile', 'This MUST be saved on exit.');*!/
  console.log(1);
});*/

/*当前进程抛出一个没有被捕捉的意外时，会触发uncaughtException事件*/
process.on('uncaughtException', function (err) {
  console.error('An uncaught error occurred!');
  console.error(err.stack);
});