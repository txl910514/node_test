/**
 * Created by root on 11/10/16.
 */
  // 不可逆加密
var crypto = require("crypto");
var text = "123|12312312123123121231231212312312123123121231231212312312";
var hasher=crypto.createHash("md5");
hasher.update(text);
var hashmsg=hasher.digest('hex');//hashmsg为加密之后的数据
/*console.log(hashmsg);*/

//返回一个支持的加密算法的名字数组。
var ciphers = crypto.getCiphers();
//console.log(ciphers); // ['aes-128-cbc', 'aes-128-ccm', ...]

//返回一个支持的哈希算法的名字数组。

var hashes = crypto.getHashes();
//console.log(hashes); // ['sha', 'sha1', 'sha1WithRSAEncryption', ...]

//返回一个支持的椭圆加密算法的名字数组。
var curves = crypto.getCurves();
//console.log(curves); // ['secp256k1', 'secp384r1', ...]

//创建并返回一个哈希对象，一个指定算法的加密哈希用来生成哈希摘要

var filename = process.argv[1];
var fs = require('fs');

var shasum = crypto.createHash('sha1');
var s = fs.ReadStream(filename);
s.on('data', function(d) {
  shasum.update(d);
});

s.on('end', function() {
  var d = shasum.digest('hex');
  console.log(d + '  ' + filename);
});
