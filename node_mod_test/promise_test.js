/**
 * Created by root on 28/08/16.
 */
var Promise = require('promise');

/*
var promise = new Promise(function (resolve, reject) {
  get('http://www.google.com', function (err, res) {
    console.log(res);
    if (err){
      reject(err);
    }
    else {
      console.log(resolve(res));
    }
  });
});*/

Promise.all([Promise.resolve('a'), 'b', Promise.resolve('c')])
  .then(function (res) {
    console.log(res);
    assert(res[0] === 'a');
    assert(res[1] === 'b');
    assert(res[2] === 'c');
  });