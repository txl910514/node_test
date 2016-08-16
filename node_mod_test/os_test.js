/**
 * Created by root on 16/08/16.
 */
var os=require("os");
//当前操作系统的主机名。
/*console.log(os.hostname());*/

//当前操作系统名称。
/*console.log(os.type());*/

//返回操作系统名
/*console.log(os.platform());*/

//当前操作系统的发型版本。
/*console.log(os.release());*/

//当前系统的正常运行时间，时间以秒为单位。
/*console.log(os.uptime());*/

//返回系统存储空间总值，该值以字节（byte）为单位。
/*console.log(os.totalmem());*/

/*
 *os.cpus()返回一个对象数组，该数组包含了关于系统每个CPU/内核的信息：型号，速度（以MHz为单位），以及CPU时间使用情况（包含CPU时间片在用户态、改变过优先级的用户进程、内核态、空闲、以及IRQ各方面的消耗）。
 */
/*console.log(os.cpus());*/

/*
 *os.loadavg()返回一个数组，该数组存储着系统1分钟，5分钟，以及15分钟的负载均值。
 */
/*console.log(os.loadavg());*/

//返回操作系统的默认临时文件夹。
/*console.log(os.tmpdir());*/

//返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
/*console.log(os.endianness());*/

//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"
/*console.log(os.arch());*/

//返回操作系统空闲内存量，单位是字节。
/*console.log(os.freemem());*/

//获得网络接口列表。
/*console.log(os.networkInterfaces());*/

//定义了操作系统的行尾符的常量。
/*console.log(os.EOL);*/
/*console.log(os.constants);*/

//当前登录用户的根目录
/*console.log(os.homedir());*/

//用户信息
console.log(os.userInfo());
