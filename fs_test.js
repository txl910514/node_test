/**
 * Created by root on 12/08/16.
 */
var fs = require('fs');
/*
fs.readFile('./res.json', function(er,data){
  console.log(data);
});*/
var stream=fs.createReadStream('./res.json');
stream.on('data',function(chunk){
  console.log(chunk);
});
stream.on('end',function(){
  console.log('wan');
});