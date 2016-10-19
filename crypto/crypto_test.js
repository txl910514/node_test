/**
 * Created by root on 11/10/16.
 */
var CryptoJS = require("crypto-js");
var crypto = require('crypto');

/*console.log(CryptoJS.MD5("你好").toString(crypto_js.enc.Hex));*/
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

/*console.log(ciphertext.toString());*/

/*console.log(CryptoJS.MD5("你好").toString());*/
var nh_hash=CryptoJS.MD5("你好").toString();
/*console.log(CryptoJS.HmacMD5("你好", "Secret Passphrase").toString());*/
/*
console.log(CryptoJS.HmacSHA1("你好", "Secret Passphrase").toString());*/





// MD5加密

/*var hash_MD5 = CryptoJS.MD5("Message");
console.log(hash_MD5.toString());*/

//  SHA1加密演示

/*var hash_SHA1 = CryptoJS.SHA1("Message");
console.log(hash_SHA1.toString());*/

//  SHA2加密演示
/*
var hash_SHA256 = CryptoJS.SHA256("Message");
console.log(hash_SHA256.toString());*/

//Progressive Hashing


/*var sha256 = CryptoJS.algo.SHA256.create();

sha256.update("Message Part 1");
sha256.update("Message Part 2");
sha256.update("Message Part 3");

var hash = sha256.finalize();
console.log(hash.toString());*/

// HMAC

/*var hash1 = CryptoJS.HmacMD5("Message", "Secret Passphrase");
var hash2 = CryptoJS.HmacSHA1("Message", "Secret Passphrase");
var hash3 = CryptoJS.HmacSHA256("Message", "Secret Passphrase");
var hash4 = CryptoJS.HmacSHA512("Message", "Secret Passphrase");

console.log(hash1.toString());
console.log(hash2.toString());
console.log(hash3.toString());
console.log(hash4.toString());*/

// Progressive HMAC Hashing

/*var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "Secret Passphrase");

hmac.update("Message Part 1");
hmac.update("Message Part 2");
hmac.update("Message Part 3");

var hash = hmac.finalize();

console.log(hash.toString());*/


/*
//加密

function Encrypt(word){
  var key = CryptoJS.enc.Utf8.parse("0102030405060708"); //加密密钥
  var iv  = CryptoJS.enc.Utf8.parse('0102030405060708'); //加密向量
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.CBC});
  return encrypted.toString();
}
//解密
function Decrypt(word){
  var key = CryptoJS.enc.Utf8.parse("0102030405060708");
  var iv  = CryptoJS.enc.Utf8.parse('0102030405060708');
  var decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv,mode:CryptoJS.mode.CBC});
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

var  en=Encrypt('育才竹岛');
console.log(Encrypt('育才竹岛'));
console.log(Decrypt(en));*/


/*//DES 解密 加密
function encryptByDES(message, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
//DES 解密

function decryptByDES(ciphertext, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  // direct decrypt ciphertext
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}*/
