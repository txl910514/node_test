/**
 * Created by root on 12/08/16.
 */
var http = require('http');
var fs = require('fs');
/*

http.createServer(function (request, response) {

  // 发送 HTTP 头部
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据 "Hello World"
  response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');*/

/*var server=http.createServer();
server.on("request",function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World\n');
});
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');*/


var server=http.createServer();
server.on("request",function(req,res){
  res.writeHead(200,{'Content-Type':'image/png'});
  fs.createReadStream('./39.png').pipe(res);
});
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');


