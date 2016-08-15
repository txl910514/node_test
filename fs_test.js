/**
 * Created by root on 12/08/16.
 */
var fs = require('fs');
fs.readFile('./res.json', function(er,data){
  console.log(data);
});