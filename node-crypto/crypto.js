/**
 * Created by root on 11/10/16.
 */
  // 不可逆加密
var crypto = require("crypto");
var fs = require('fs');
/*var text = "123|12312312123123121231231212312312123123121231231212312312";
var hasher=crypto.createHash("md5");
hasher.update(text);
var hashmsg=hasher.digest('hex');//hashmsg为加密之后的数据*/
/*console.log(hashmsg);*/

// MD5加密例程

/*var content = 'txl123321TXL';
var md5 = crypto.createHash('md5');
md5.update(content);
var d = md5.digest('hex');  //MD5值是5f4dcc3b5aa765d61d8327deb882cf99
console.log(d);*/

// SHA1算法

/*var content = 'txl123321TXL'
var shasum = crypto.createHash('sha1');
shasum.update(content);
var d = shasum.digest('hex');
console.log(d);*/

// Hmac算法 BAE加密验证
/*var SecrectKey =d;
var Signture = require('crypto').createHmac('sha1', SecrectKey).
  update(content).digest().toString('base64');

console.log(Signture);*/


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

/*var filename = process.argv[1];
var fs = require('fs');

var shasum = crypto.createHash('sha1');
var s = fs.ReadStream(filename);
s.on('data', function(d) {
  shasum.update(d);
});

s.on('end', function() {
  var d = shasum.digest('hex');
  console.log(d + '  ' + filename);
});*/


// HMAC

/*
var pem = fs.readFileSync(__dirname+'/key.pem');
var key = pem.toString('ascii');
var hmac = crypto.createHmac('sha1', key);
hmac.update('foo');
var d = hmac.digest('hex');
console.log(d);*/

/*var pem = fs.readFileSync(__dirname+'/key.pem');
var key = pem.toString('ascii');
var cipher = crypto.createCipher('blowfish', key);
console.log(cipher.update(new Buffer(4), 'binary', 'hex'));
console.log(cipher.update(new Buffer(4), 'binary', 'hex'));
console.log(cipher.update(new Buffer(4), 'binary', 'hex'));
console.log( cipher.final('hex'));*/

// 完整例子 加密解密
/*var cipher = crypto.createCipher('aes-256-cbc','InmbuvP6Z8');
var text = "123|123";
var crypted = cipher.update(text,'utf8','hex');
crypted += cipher.final('hex');
var decipher = crypto.createDecipher('aes-256-cbc','InmbuvP6Z8');
var dec = decipher.update(crypted,'hex','utf8');
dec += decipher.final('utf8');*/

//第二段代码

/* var pem = fs.readFileSync(__dirname+'/key.pem');
 var key = pem.toString('ascii');
 var plaintext = new Buffer('abcdefghijklmnopqrstuv');
 var encrypted = "";
 var cipher = crypto.createCipher('blowfish', key);
 encrypted += cipher.update(plaintext, 'binary', 'hex');
 encrypted += cipher.final('hex');
 var decrypted = "";
 var decipher = crypto.createDecipher('blowfish', key);
 decrypted += decipher.update(encrypted, 'hex', 'binary');
 decrypted += decipher.final('binary');
 var output = new Buffer(decrypted).toString();
console.log(output);*/


// 不对称加密算法

/* var privatePem = fs.readFileSync(__dirname+'/server.pem');
 var publicPem = fs.readFileSync(__dirname+'/cert.pem');
 var key = privatePem.toString();
 var pubkey = publicPem.toString();
 var data = "abcdef";
var sign = crypto.createSign('RSA-SHA256');
 sign.update(data);

 var sig = sign.sign(key, 'hex');

 var verify = crypto.createVerify('RSA-SHA256');
 verify.update(data);
console.log( verify.verify(pubkey, sig, 'hex'));*/


// 对称密钥 createDiffieHellman

/**
 * 1、diffieHellman.getPrime([encoding]) 和 diffieHellman.getGenerator([encoding])
 获得这个dh实例的素数，以参数encoding的形式， ‘binary’, ‘hex’, 或 ‘base64’. 默认是 ‘binary’。

 2、diffieHellman.generateKeys([encoding])
 生成dh的私有key和公有key，此方法根据指定的encoding返回公有key，公有key会传递给另外一方，用来生成对称密钥用

 3、diffieHellman.getPrivateKey([encoding]) 和 diffieHellman.getPublicKey([encoding])
 顾名思义，返回私有key和公有key

 4、diffieHellman.setPublicKey(public_key, [encoding]) 和 diffieHellman.setPrivateKey(public_key, [encoding])
 顾名思义，设置公有key和私有key，这里nodeapi写错了。

 5、diffieHellman.computeSecret(other_public_key, [input_encoding], [output_encoding])
 根据 对方的公有 key 算出对称密钥，第二个参数是对方密钥输入的encoding，第三个是对称密钥输出的格式

 6、crypto.getDiffieHellman(group_name)
 生成一个预定义的dh交换key对象，支持如下几种：‘modp1’, ‘modp2’, ‘modp5’ (defined in RFC 2412) and ‘modp14’, ‘modp15’, ‘modp16’, ‘modp17’, ‘modp18’ (defined in RFC 3526)。
 返回的对象就像dh实例一样，但是不允许去改变它的私有key和公有key。使用它的优点是通常就是直接使用它不用交换生成key，只需要在握手前使用一样的group系数即可，节约了大家的处理时间和握手时间。

 * */

/*var alice = crypto.getDiffieHellman('modp5');
var bob = crypto.getDiffieHellman('modp5');

alice.generateKeys();
bob.generateKeys();

var alice_secret = alice.computeSecret(bob.getPublicKey(), 'binary', 'hex');
var bob_secret = bob.computeSecret(alice.getPublicKey(), 'binary', 'hex');

console.log(alice_secret == bob_secret);*/


// 完整的一个Diffie–Hellman key exchange的示例：
/*var assert = require("assert");

var diffieHellman1 = crypto.createDiffieHellman(256);
var prime1 = diffieHellman1.getPrime('base64');
var diffieHellman2 = crypto.createDiffieHellman(prime1, 'base64');
var key1 = diffieHellman1.generateKeys();
var key2 = diffieHellman2.generateKeys('hex');
var secret1 = diffieHellman1.computeSecret(key2, 'hex', 'base64');
var secret2 = diffieHellman2.computeSecret(key1, 'binary', 'base64');

console.log(secret1);
console.log(secret2);
console.log(assert.equal(secret1, secret2, 'secret1,secret2不相等 =='));*/


//  crypto.randomBytes(size, [callback])

/*生成加密用的伪随机码，支持2种方法，当传递cb的话就是异步方法，不传cb就是同步方法：*/

// async
/*crypto.randomBytes(256, function(ex, buf) {
  if (ex) throw ex;
  console.log('Have %d bytes of random data: %s', buf.length, buf);
});

// sync
try {
  var buf = crypto.randomBytes(256);
  console.log('Have %d bytes of random data: %s', buf.length, buf);
} catch (ex) {
  // handle error
}*/

// crypto.pbkdf2(password, salt, iterations, keylen, callback)

/*异步的方法，通过伪随机码来加密迭代数次，利用sha1算法生成一个更加强壮的加密串。我们结合上面的 crypto.randomBytes 来生成一个强壮的加密串。*/

crypto.randomBytes(128, function (err, salt) {
  if (err) { throw err;}
  salt = new Buffer(salt).toString('hex');
  crypto.pbkdf2('123456', salt, 7000, 256, function (err,hash) {
    if (err) { throw err; }
    hash = new Buffer(hash).toString('hex');
    console.log(hash);
  })
})