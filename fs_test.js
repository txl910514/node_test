/**
 * Created by root on 12/08/16.
 */
var fs = require('fs');
var path= require('path');
/*
fs.readFile('./res.json', function(er,data){
  console.log(data);
});*/
/*var stream=fs.createReadStream('./res.json');
stream.on('data',function(chunk){
  console.log(chunk);
});
stream.on('end',function(){
  console.log('wan');
});*/

// 获取文件信息
// fs.stat(path, callback)

/**
 * 参数
 * 参数使用说明如下：
 * path - 文件路径。
 * callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
 * fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
 */
/*fs.stat(__dirname + '/fsDir/a.js', function (err, stats) {
  console.log(stats.isFile()); 		//true
  console.log(stats.atime.toString()); //最后一次访问文件（或者目录）数据的时间
  console.log(stats.mtime.toString()); //  最后一次修改文件（或者目录）数据的时间
  console.log(stats.ctime.toString()); //  最后一次修改内节点状态的时间
})*/

/**
 * stats.isFile()	如果是文件返回 true，否则返回 false。
 * stats.isDirectory()	如果是目录返回 true，否则返回 false。
 * stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
 * stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
 * stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
 * stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
 * stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
*/

//实例

/*
console.log("准备打开文件！");
fs.stat(__dirname + '/fsDir/a.js', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("读取文件信息成功！");

  // 检测文件类型
  console.log("是否为文件(isFile) ? " + stats.isFile());
  console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});
*/

// 获取文件信息（不解析符号链接）。
/**
 * fs.lstat(path, callback)
 * 异步 lstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。
 * */
/*fs.lstat(__dirname + '/fsDir/a.js', function (err, stats) {
 console.log(stats); 		//true
 });*/

// 根据文件描述符获取文件信息。
/**
 * 20	fs.fstat(fd, callback)
 * 异步 fstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。
 * */

/*fs.open(__dirname + '/fsDir/a.js', 'a', function(err,fd){
  if(err){
    throw err;
  }
  console.log('file open');
  fs.fstat(fd, function(err, stats){
    if(err){
      throw err;
    }
    console.log(stats);
    fs.close(fd , function(){
      console.log('file close');
    })
  })
});*/

// 同步磁盘缓存。

/**
 * fs.fsync(fd, callback)
 异步 fsync.回调函数没有参数，但可能抛出异常。
 * */

// 关闭文件

/**
 * fs.close(fd, callback)
 * */



// 1.读取文件readFile函数

//readFile(filename,[options],callback);

/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

/*fs.readFile(__dirname + '/foo.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
  if(err) {
    console.error(err);
    return;
  }
  console.log(data);
});*/

// 2.写文件

// fs.writeFile(filename,data,[options],callback);

/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

/*var w_text = '这是一段通过fs.writeFile函数写入的内容；\r\n';
var w_data = new Buffer(w_text);
fs.writeFile(__dirname + '/test.txt', w_data, {flag: 'a'}, function (err) {
  if(err) {
    console.error(err);
  } else {
    console.log('写入成功');
  }
});*/


// 3.以追加方式写文件
// fs.appendFile(filename,data,[options],callback);

/*
fs.appendFile(__dirname + '/test.txt', '使用fs.appendFile追加文件内容', function () {
  console.log('追加内容完成');
});
*/

// 4、打开文件
// fs.open(filename, flags, [mode], callback);

/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */

/*fs.open(__dirname + '/test.txt', 'r', '0666', function (err, fd) {
  console.log(fd);
});*/

// 5.读文件，读取打开的文件内容到缓冲区中；
//fs.read(fd, buffer, offset, length, position, callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length, 整数，读取文件的长度
 * position, 整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */

/*fs.open(__dirname + '/test.txt', 'r', function (err, fd) {
  if(err) {
    console.error(err);
    return;
  } else {
    var buffer = new Buffer(255);
    console.log(buffer.length);
    //每一个汉字utf8编码是3个字节，英文是1个字节
    fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
      if(err) {
        throw err;
      } else {
        console.log(bytesRead);
        console.log(buffer.slice(0, bytesRead).toString());
        //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 12, 9, function (err, bytesRead, buffer) {
          console.log(bytesRead);
          console.log(buffer.slice(0, bytesRead).toString());
        });
      }
    });
  }
});*/

// 6.写文件，将缓冲区内数据写入使用fs.open打开的文件

//fs.write(fd, buffer, offset, length, position, callback);

/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
 * length, 整数，从缓存区中读取数据的字节数
 * position, 整数，写入文件初始位置；
 * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */

/*fs.open(__dirname + '/test.txt', 'a', function (err, fd) {
  if(err) {
    console.error(err);
    return;
  } else {
    var buffer = new Buffer('写入文件数据内容');
    //写入'入文件'三个字
    fs.write(fd, buffer, 3, 9, 12, function (err, written, buffer) {
      if(err) {
        console.log('写入文件失败');
        console.error(err);
        return;
      } else {
        console.log(buffer.toString());
        //写入'数据内'三个字
        fs.write(fd, buffer, 12, 9, null, function (err, written, buffer) {
          console.log(buffer.toString());
        })
      }
    });
  }
});*/

// 7、刷新缓存区;

// 使用fs.write写入文件时，操作系统是将数据读到内存，再把数据写入到文件中，当数据读完时并不代表数据已经写完，因为有一部分还可能在内在缓冲区内。
// 因此可以使用fs.fsync方法将内存中数据写入文件；--刷新内存缓冲区；

//fs.fsync(fd, [callback])
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * [callback(err, written, buffer)], 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */

/*fs.open(__dirname + '/test.txt', 'a', function (err, fd) {
  if(err)
    throw err;
  var buffer = new Buffer('我爱nodejs编程');
  fs.write(fd, buffer, 0, 9, 0, function (err, written, buffer) {
    console.log(written.toString());
    fs.write(fd, buffer, 9, buffer.length - 9, null, function (err, written) {
      console.log(written.toString());
      fs.fsync(fd);
      fs.close(fd);
    })
  });
});*/

// 8、创建目录;

//使用fs.mkdir创建目录
//fs.mkdir(path, [mode], callback);

/**
 * path, 被创建目录的完整路径及目录名；
 * [mode], 目录权限，默认0777
 * [callback(err)], 创建完目录回调函数,err错误对象
 */

/*
fs.mkdir(__dirname + '/fsDir', function (err) {
  if(err)
    throw err;
  console.log('创建目录成功')
});*/

// 9、读取目录;

//使用fs.readdir读取目录，重点其回调函数中files对象
//fs.readdir(path, callback);

/**
 * path, 要读取目录的完整路径及目录名；
 * [callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
 */

/*fs.readdir(__dirname + '/fsDir/', function (err, files) {
  if(err) {
    console.error(err);
    return;
  } else {
    files.forEach(function (file) {
      var filePath = path.normalize(__dirname + '/fsDir/' + file);
      fs.stat(filePath, function (err, stat) {
        if(stat.isFile()) {
          console.log(filePath + ' is: ' + 'file');
        }
        if(stat.isDirectory()) {
          console.log(filePath + ' is: ' + 'dir');
        }
      });
    });
    for (var i = 0; i < files.length; i++) {
      //使用闭包无法保证读取文件的顺序与数组中保存的致
      (function () {
        var filePath = path.normalize(__dirname + '/fsDir/' + files[i]);
        fs.stat(filePath, function (err, stat) {
          if(stat.isFile()) {
            console.log(filePath + ' is: ' + 'file');
          }
          if(stat.isDirectory()) {
            console.log(filePath + ' is: ' + 'dir');
          }
        });
      })();
    }
  }
});*/


// 10、查看文件与目录的信息;

//fs.stat(path, callback);
//fs.lstat(path, callback); //查看符号链接文件
/**
 * path, 要查看目录/文件的完整路径及名；
 * [callback(err, stats)], 操作完成回调函数；err错误对象，stat fs.Stat一个对象实例，提供如:isFile, isDirectory,isBlockDevice等方法及size,ctime,mtime等属性
 */

//实例，查看fs.readdir

// 11.查看文件与目录的是否存在

//fs.exists(path, callback);

/**
 * path, 要查看目录/文件的完整路径及名；
 * [callback(exists)], 操作完成回调函数；exists true存在，false表示不存在
 */

/*fs.exists(__dirname + '/fsDr', function (exists) {
  var retTxt = exists ? '文件存在' : '文件不存在';
  console.log(retTxt);
});*/

// 12、修改文件访问时间与修改时间

//fs.utimes(path, atime, mtime, callback);

/**
 * path, 要查看目录/文件的完整路径及名；
 * atime, 新的访问时间
 * ctime, 新的修改时间
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */

/*fs.utimes(__dirname + '/fsDir/a.js', new Date(), new Date(), function (err) {
  if(err) {
    console.error(err);
    return;
  }
  fs.stat(__dirname + '/fsDir/a.js', function (err, stat) {
    console.log('访问时间: ' + stat.atime.toString() + '; \n修改时间：' + stat.mtime.toString());
    console.log(stat.mode);
  })
});*/

// 13、修改文件或目录的操作权限

//fs.chmod(path, mode, callback);

/**
 * path, 要查看目录/文件的完整路径及名；
 * mode, 指定权限，如：0666 8进制，权限：所有用户可读、写，
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */

/*fs.chmod(__dirname + '/fsDir/a.js', 0666, function (err) {
  if(err) {
    console.error(err);
    return;
  }
  console.log('修改权限成功')
});*/

// 14、移动/重命名文件或目录

//fs.rename(oldPath, newPath, callback);

/**
 * oldPath, 原目录/文件的完整路径及名；
 * newPath, 新目录/文件的完整路径及名；如果新路径与原路径相同，而只文件名不同，则是重命名
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */
/*fs.rename(__dirname + '/app/fsDir', __dirname + '/fsDir', function (err) {
  if(err) {
    console.error(err);
    return;
  }
  console.log('重命名成功')
});*/

// 15、删除空目录

//fs.rmdir(path, callback);

/**
 * path, 目录的完整路径及目录名；
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */

/*fs.rmdir(__dirname + '/test', function (err) {
  fs.mkdir(__dirname + '/test', 0666, function (err) {
    console.log('创建test目录');
  });
  if(err) {
    console.log('删除空目录失败，可能原因：1、目录不存在，2、目录不为空')
    console.error(err);
    return;
  }
  console.log('删除空目录成功!');
});*/

// 16、监视文件

//对文件进行监视，并且在监视到文件被修改时执行处理
//fs.watchFile(filename, [options], listener);

/**
 * filename, 完整路径及文件名；
 * [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
 * listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
 */

/*
fs.watchFile(__dirname + '/test1.txt', {interval: 20}, function (curr, prev) {
  if(Date.parse(curr.ctime) == 0) {
    console.log('文件被删除!')
  }
  fs.exists(__dirname + '/test1.txt', function(exists){
    if(exists){
      if(Date.parse(prev.ctime) == 0) {
        console.log('文件被创建!');
      } else if(Date.parse(curr.ctime) == 0) {
        console.log('文件被删除!')
      } else if(Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
      }
    }
  });
});
*/


/*fs.watchFile(__dirname + '/test/test.txt', function (curr, prev) {
  console.log('这是第二个watch,监视到文件有修改');
});*/

// 17、取消监视文件

//取消对文件进行监视
//fs.unwatchFile(filename, [listener]);

/**
 * filename, 完整路径及文件名；
 * [listener], 要取消的监听器事件，如果不指定，则取消所有监听处理事件
 */

/*var listener = function (curr, prev) {
  console.log('我是监视函数');
};
fs.unwatchFile(__dirname + '/test1.txt', listener);*/

// 18、监视文件或目录

// 对文件或目录进行监视，并且在监视到修改时执行处理；
// fs.watch返回一个fs.FSWatcher对象，拥有一个close方法，用于停止watch操作；
// 当fs.watch有文件变化时，会触发fs.FSWatcher对象的change(err, filename)事件，err错误对象，filename发生变化的文件名
// fs.watch(filename, [options], [listener]);

/**
 * filename, 完整路径及文件名或目录名；
 * [listener(event, filename], 监听器事件，有两个参数：event 为rename表示指定的文件或目录中有重命名、删除或移动操作或change表示有修改，filename表示发生变化的文件路径
 */

var fsWatcher = fs.watch(__dirname + '/test', function (event, filename) {
  //console.log(event)
});

//console.log(fsWatcher instanceof FSWatcher);

fsWatcher.on('change', function (event, filename) {
  console.log(filename + ' 发生变化')
});

//30秒后关闭监视
setTimeout(function () {
  console.log('关闭')
  fsWatcher.close(function (err) {
    if(err) {
      console.error(err)
    }
    console.log('关闭watch')
  });
}, 30000);

// 19、文件流

/**
 * 流，在应用程序中表示一组有序的、有起点有终点的字节数据的传输手段；
 * Node.js中实现了stream.Readable/stream.Writeable接口的对象进行流数据读写；以上接口都继承自EventEmitter类，因此在读/写流不同状态时，触发不同事件；
 * 关于流读取：Node.js不断将文件一小块内容读入缓冲区，再从缓冲区中读取内容；
 * 关于流写入：Node.js不断将流数据写入内在缓冲区，待缓冲区满后再将缓冲区写入到文件中；重复上面操作直到要写入内容写写完；
 * readFile、read、writeFile、write都是将整个文件放入内存而再操作，而则是文件一部分数据一部分数据操作；
 *
 * -----------------------流读取-------------------------------------
 * 读取数据对象：
 * fs.ReadStream 读取文件
 * http.IncomingMessage 客户端请求或服务器端响应
 * net.Socket    Socket端口对象
 * child.stdout  子进程标准输出
 * child.stdin   子进程标准入
 * process.stdin 用于创建进程标准输入流
 * Gzip、Deflate、DeflateRaw   数据压缩
 *
 * 触发事件：
 * readable  数据可读时
 * data      数据读取后
 * end       数据读取完成时
 * error     数据读取错误时
 * close     关闭流对象时
 *
 * 读取数据的对象操作方法：
 * read      读取数据方法
 * setEncoding   设置读取数据的编
 * pause     通知对象众目停止触发data事件
 * resume    通知对象恢复触发data事件
 * pipe      设置数据通道，将读入流数据接入写入流；
 * unpipe    取消通道
 * unshift   当流数据绑定一个解析器时，此方法取消解析器
 *
 * ------------------------流写入-------------------------------------
 * 写数据对象：
 * fs.WriteStream           写入文件对象
 * http.clientRequest       写入HTTP客户端请求数据
 * http.ServerResponse      写入HTTP服务器端响应数据
 * net.Socket               读写TCP流或UNIX流，需要connection事件传递给用户
 * child.stdout             子进程标准输出
 * child.stdin              子进程标准入
 * Gzip、Deflate、DeflateRaw  数据压缩
 *
 * 写入数据触发事件：
 * drain            当write方法返回false时，表示缓存区中已经输出到目标对象中，可以继续写入数据到缓存区
 * finish           当end方法调用，全部数据写入完成
 * pipe             当用于读取数据的对象的pipe方法被调用时
 * unpipe           当unpipe方法被调用
 * error            当发生错误
 *
 * 写入数据方法：
 * write            用于写入数据
 * end              结束写入，之后再写入会报错；
 */


// 20、创建读取流

//fs.createReadStream(path, [options])
/**
 * path 文件路径
 * [options] flags:指定文件操作，默认'r',读操作；encoding,指定读取流编码；autoClose, 是否读取完成后自动关闭，默认true；start指定文件开始读取位置；end指定文件开始读结束位置
 */

/*var rs = fs.createReadStream(__dirname + '/test.txt', {start: 0, end: 2});
//open是ReadStream对象中表示文件打开时事件，
rs.on('open', function (fd) {
  console.log('开始读取文件');
});

rs.on('data', function (data) {
  console.log(data.toString());
});

rs.on('end', function () {
  console.log('读取文件结束')
});
rs.on('close', function () {
  console.log('文件关闭');
});

rs.on('error', function (err) {
  console.error(err);
});

//暂停和回复文件读取；
rs.on('open', function () {
  console.log('开始读取文件');
});

rs.pause();

rs.on('data', function (data) {
  console.log(data.toString());
});

setTimeout(function () {
  rs.resume();
}, 2000);*/


// 21、创建写入流

//fs.createWriteStream(path, [options])
/**
 * path 文件路径
 * [options] flags:指定文件操作，默认'w',；encoding,指定读取流编码；start指定写入文件的位置
 */

/* ws.write(chunk, [encoding], [callback]);
 * chunk,  可以为Buffer对象或一个字符串，要写入的数据
 * [encoding],  编码
 * [callback],  写入后回调
 */

/* ws.end([chunk], [encoding], [callback]);
 * [chunk],  要写入的数据
 * [encoding],  编码
 * [callback],  写入后回调
 */

/*var ws = fs.createWriteStream(__dirname + '/test.txt', {start: 0});
var buffer = new Buffer('我也喜欢你');
ws.write(buffer, 'utf8', function (err, buffer) {
  console.log(arguments);
  console.log('写入完成，回调函数没有参数')
});
//最后再写入的内容
ws.end('再见');
//使用流完成复制文件操作
var rs = fs.createReadStream(__dirname + '/test.txt')
var tws = fs.createWriteStream(__dirname + '/test/test.txt');

rs.on('data', function (data) {
  tws.write(data)
});

tws.on('open', function (fd) {
  console.log('要写入的数据文件已经打开，文件描述符是： ' + fd);
});

rs.on('end', function () {
  console.log('文件读取完成');
  tws.end('完成', function () {
    console.log('文件全部写入完成')
  });
});*/


//关于WriteStream对象的write方法返回一个布尔类型，当缓存区中数据全部写满时，返回false;
//表示缓存区写满，并将立即输出到目标对象中

/*//第一个例子
var ws = fs.createWriteStream(__dirname + '/test/test.txt');
for (var i = 0; i < 10000; i++) {
  var w_flag = ws.write(i.toString());
  //当缓存区写满时，输出false
  console.log(w_flag);
}*/


/*//第二个例子
var ws = fs.createWriteStream(__dirname + '/test/m.txt');
var rs = fs.createReadStream(__dirname + '/test/test.txt');
rs.on('data', function (data) {
  var flag = ws.write(data);
  console.log(flag);
});

//系统缓存区数据已经全部输出触发drain事件
ws.on('drain', function () {
  console.log('系统缓存区数据已经全部输出。')
});*/


// 22、管道pipe实现流读写

//rs.pipe(destination, [options]);
/**
 * destination 必须一个可写入流数据对象
 * [opations] end 默认为true，表示读取完成立即关闭文件；
 */

/*var rs = fs.createReadStream(__dirname + '/test/test.txt');
var ws = fs.createWriteStream(__dirname + '/test/m.txt');
rs.pipe(ws);
rs.on('data', function (data) {
  console.log('数据可读')
});
rs.on('end', function () {
  console.log('文件读取完成');
  //ws.end('再见')
});*/

// 23.链式流

/**
 * 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
 * 接下来我们就是用管道和链式来压缩和解压文件。
 * */

// 压缩
var zlib = require('zlib');

/*// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream(__dirname + '/test/m.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(__dirname + '/test/m.txt.gz'));

console.log("文件压缩完成。");*/


/*//解压
// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream(__dirname + '/test/m.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(__dirname +'/m.txt'));

console.log("文件解压完成。");*/

