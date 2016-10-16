/**
 * Created by root on 11/10/16.
 */
var CryptoJS = require("crypto-js/crypto-js");
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

var text = "123|12312312123123121231231212312312123123121231231212312312";
var hasher=crypto.createHash("md5");
hasher.update(text);
var hashmsg=hasher.digest('hex');
console.log(hashmsg);

var ciphers = crypto.getCiphers();
console.log(ciphers);