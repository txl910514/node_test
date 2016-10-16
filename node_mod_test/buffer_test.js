/**
 * Created by root on 12/10/16.
 */

// 1.创建Buffer类

// 长度为0的Buffer实例
/*
var a = new Buffer(0);
console.log(a);*/

// 长度为10的Buffer实例
/*var a10 = new Buffer(10);
console.log(a10);*/

// 数组
/*var b = new Buffer(['a','b',12]);
console.log(b);*/

// 字符编码
/*var b2 = new Buffer('你好','utf-8');
console.log(b2);*/

// 支持的编码
/**
* buffer.Buffer.isEncoding方法为检测是否为有效的编码参数，返回true 或 false。
* Buffer.isEncoding(encoding)
* encoding {String}   被检测的编码格式
* */
/*console.log(Buffer.isEncoding('utf-8'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('ucs2'));
console.log(Buffer.isEncoding('base64'));
console.log(Buffer.isEncoding('hex'));*/  //# 16制进

//不支持的编码
/*console.log(Buffer.isEncoding('gbk'));
console.log(Buffer.isEncoding('gb2312'));*/
// > false

// Buffer检查，很多时候我们需要判断数据的类型，对应后续的操作。
/*console.log(Buffer.isBuffer(new Buffer('a')));*/

/*字符串的字节长度，由于字符串编码不同，所以字符串长度和字节长度有时是不一样的。比如，1个中文字符是3个字节，通过utf-8编码输出就是4个中文字符，
 占12个字节。*/
/*var str2 = '粉丝日志';
console.log(str2 + ": " + str2.length + " characters, " + Buffer.byteLength(str2, 'utf8') + " bytes");
console.log(str2 + ": " + str2.length + " characters, " + Buffer.byteLength(str2, 'ascii') + " bytes");*/

// Buffer的连接，用于连接Buffer的数组。我们可以手动分配Buffer对象合并后的Buffer空间大小，如果Buffer空间不够了，则数据会被截断。
/*var b1 = new Buffer("abcd");
var b2 = new Buffer("1234");
var b3 = Buffer.concat([b1,b2],8);*/
/*console.log(b3.toString());*/

/*var b4 = Buffer.concat([b1,b2],32);
console.log(b4.toString());
console.log(b4.toString('hex'));*/

/*var b5 = Buffer.concat([b1,b2],5);
console.log(b5.toString());*/

// Buffer的比较，用于Buffer的内容排序，按字符串的顺序。
// 比较当前缓冲区和另一个缓冲区的大小，相等返回0，小于返回-1，大于返回1。

var a1 = new Buffer('10');
var a2 = new Buffer('90');
var a3 = new Buffer('223');

// a1小于a2
/*console.log(Buffer.compare(a1,a2));*/

// a2小于a3
/*console.log(Buffer.compare(a2, a3));*/
/*console.log(a2.compare(a3));*/
/*console.log([a1,a2,a3].sort(Buffer.compare));*/
/*console.log([a1,a2,a3].sort(Buffer.compare).toString());*/

//写入Buffer
// 把数据写入到Buffer的操作

  // 创建空间大小为64字节的Buffer
/*  var buf = new Buffer(64);*/

  // 从开始写入Buffer，偏移0
/*  var len1 = buf.write('从开始写入');*/

  // 打印数据的长度，打印Buffer的0到len1位置的数据
/*  console.log(len1 + " bytes: " + buf.toString('utf8', 0, len1));*/

  // 重新写入Buffer，偏移0，将覆盖之前的Buffer内存
/*  len1 = buf.write('重新写入');*/
/*  console.log(len1 + " bytes: " + buf.toString('utf8', 0, len1));*/

  // 继续写入Buffer，偏移len1，写入unicode的字符串
/*  var len2 = buf.write('\u00bd + \u00bc = \u00be',len1);*/
/*  console.log(len2 + " bytes: " + buf.toString('utf8', 0, len1+len2));*/

  // 继续写入Buffer，偏移30
/*  var len3 = buf.write('从第30位写入', 30);*/
/*  console.log(len3 + " bytes: " + buf.toString('utf8', 0, 30+len3));*/

  // Buffer总长度和数据
/*  console.log(buf.length + " bytes: " + buf.toString('utf8', 0, buf.length));*/

  // 继续写入Buffer，偏移30+len3
/*  var len4 = buf.write('写入的数据长度超过Buffer的总长度！',30+len3);*/

  // 超过Buffer空间的数据，没有被写入到Buffer中
/*  console.log(buf.length + " bytes: " + buf.toString('utf8', 0, buf.length));*/

/**
 * buf.write用来向缓冲区中写入一个字符串，返回实际写入的字节数。参数含义如下：

 string，待写入的字符串对象
 offset，缓冲区偏移量，指定的话就从这个位置开始写入，不指定就默认为0
 length，要写入的字节数
 encoding，代谢如字符串的编码格式，默认为utf8
 * buf.write(string[, offset][, length][, encoding])
 * buf.writeUIntLE(value, offset, byteLength[, noAssert])
 * buf.writeUIntBE(value, offset, byteLength[, noAssert])
 * buf.writeIntLE(value, offset, byteLength[, noAssert])
 * buf.writeIntBE(value, offset, byteLength[, noAssert])
 * buf.writeUInt8(value, offset[, noAssert])
 * buf.writeUInt16LE(value, offset[, noAssert])
 * buf.writeUInt16BE(value, offset[, noAssert])
 * buf.writeUInt32LE(value, offset[, noAssert])
 * buf.writeUInt32BE(value, offset[, noAssert])
 * buf.writeInt8(value, offset[, noAssert])
 * buf.writeInt16LE(value, offset[, noAssert])
 * buf.writeInt16BE(value, offset[, noAssert])
 * buf.writeInt32LE(value, offset[, noAssert])
 * buf.writeInt32BE(value, offset[, noAssert])
 * buf.writeFloatLE(value, offset[, noAssert])
 * buf.writeFloatBE(value, offset[, noAssert])
 * buf.writeDoubleLE(value, offset[, noAssert])
 * buf.writeDoubleBE(value, offset[, noAssert])
 *
 * */

 /**
 * Buffer复制函数 buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])。
  */
 // 新建两个Buffer实例
/* var buf1 = new Buffer(26);
var buf2 = new Buffer(26);*/

// 分别向2个实例中写入数据
/*for (var i = 0 ; i < 26 ; i++) {
 buf1[i] = i + 97; // 97是ASCII的a
 buf2[i] = 50; // 50是ASCII的2
}*/

// 把buf1的内存复制给buf2
/*buf1.copy(buf2, 5, 0, 10); */// 从buf2的第5个字节位置开始插入，复制buf1的从0-10字节的数据到buf2中
/*console.log(buf2.toString('ascii', 0, 25));*/ // 输入buf2的0-25字节

/**
 * Buffer填充函数 buf.fill(value[, offset][, end])。
 * */

// 新建Buffer实例，长度20节节
/*var buf1 = new Buffer(20);*/

// 向Buffer中填充数据
/*buf1.fill("h");*/
/*console.log(buf1.toString());*/

// 清空Buffer中的数据
/*buf1.fill();*/
/*console.log("buf:"+buf1.toString());*/

/**
 * Buffer裁剪，buf.slice([start][, end])。返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪裁。
 * **/

/*var buf1 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
 buf1[i] = i + 97;
}

// 从剪切buf1中的0-3的位置的字节，新生成的buf2是buf1的一个切片。
var buf2 = buf1.slice(0, 3);
console.log(buf2.toString('ascii', 0, buf2.length));

// 当修改buf1时，buf2同时也会发生改变
buf1[0] = 33;
console.log(buf2.toString('ascii', 0, buf2.length));*/

// 读取Buffer

/*
var buf = new Buffer(10);
for (var i = 0 ; i < 10 ; i++) {
 buf[i] = i + 97;
}
console.log(buf.length + " bytes: " + buf.toString('utf-8'));

// 读取数据
for (var j = 0; j < buf.length; j++) {
 var ch = buf.readUInt8(j); // 获得ASCII索引
 console.log(ch + ":"+ String.fromCharCode(ch));
}*/

// 写入中文数据，以readXXX进行读取，会3个字节来表示一个中文字。

/*
var buf = new Buffer(10);
buf.write('abcd');
buf.write('数据',4);
for (var i = 0; i < buf.length; i++) {
 console.log(buf.readUInt8(i));
}
console.log(buf.toString());
console.log("utf-8  :"+buf.toString('utf-8'));
console.log("ascii  :"+buf.toString('ascii'));//有乱码，中文不能被正确解析
console.log("hex    :"+buf.toString('hex')); //16进制*/

/**
 * 对于Buffer的输出，我们用的最多的操作就是toString()，按照存入的编码进行读取。除了toString()函数，
 * 还可以用toJSON()直接Buffer解析成JSON对象。
 * */

/*var buf = new Buffer('test');
console.log(buf.toJSON());*/

/**
 * Buffer的转换

 Buffer对象可以和字符串相互转换，支持的编码类型如下：
 ASCII、UTF-8、UTF-16LE/UCS-2、Base64、Binary、Hex
 *
 * **/

/**
 * 字符串转Buffer
 new Buffer(str, [encoding])，默认UTF-8
 buf.write(string, [offset], [length], [encoding])
 * **/

/**
 * 使用new操作符，有四种方法创建一个Buffer实例：

 new Buffer(size)，创建一个指buffer定大小的buffer
 new Buffer(array)，根据一个字节数组来创建一个buffer
 new Buffer(str[,encoding])，根据一个字符串和编码格式创建buffer，不指定编码时默认使用utf8
 new Buffer(buffer)，根据buffer实例创建一个新的buffer
 比如下面的代码可以创建Buffer的实例：
 * **/

/*
var buf1 = new Buffer(256);
var buf2 = new Buffer("Hello Buffer");
var buf3 = new Buffer([0x65,0x66,0x67]);
var buf4 = new Buffer(buf2);
*/

/**
 * 有一点需要说明，使用new Buffer(size)分配的缓冲区，是未初始化的哦。那块内存里，可能是脏的，什么玩意儿都有。试试下面的代码：
 * **/

/*
var buf1 = new Buffer(256);
buf1.write('abc');
console.log("buf1\'s content: ", buf1.toString());
*/

/**
 * 上面的代码企图使用toString转换Buffer，可是你会看到控制台输出了很多乱码……修改一下，使用buf.fill()方法填充一下就好了：
 * **/

/*
var buf1 = new Buffer(256);
buf1.fill(0);
buf1.write('abc');
console.log("buf1\'s content: ", buf1.toString());*/

/**
 * buf.equals(otherBuffer)判断当前缓冲区是否和另一个相等，相等时返回true。
 * **/

/*var buf1=new Buffer("5");
var buf2=new Buffer("5");
console.log(buf1.equals(buf2));
console.log(buf1.toString('base64'));
var base=buf1.toString('base64');
var text=new Buffer(base,'base64').toString('utf-8');
console.log(text);*/

// 缓冲区长度
var buf2=new Buffer("5");
console.log(buf2.length);

