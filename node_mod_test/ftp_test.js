var Client = require('ftp');
var fs = require('fs');
var c = new Client();
/*c.on('ready', function() {
  c.list(function(err, list) {
    if (err) throw err;
    console.dir(list);
    c.end();
  });
});*/
c.on('ready', function() {
  c.put('foo.txt', 'foo.remote-copy.txt', function(err) {
    if (err) throw err;
    c.end();
  });
});
// connect to localhost:21 as anonymous
c.connect({host:'60.205.21.81',port:21,user:'bxu2359040480',password:'txl910514'});
