var yuan = require('./yuan.js');
var fang = require('./fang.js');
var People = require('./People.js');
// 引入node_modules文件夹中的内容可以掐头去尾
var sjx = require('sjx');

// yuan和fang相当于命名空间
console.log(yuan.mianji(10));
console.log(yuan.zhouchang(10));

console.log(fang.mianji(10));
console.log(fang.zhouchang(10));

var xiaoming = new People('小明', 12, '男');
xiaoming.singing();

console.log(sjx.mianji(2, 6));
console.log(sjx.zhouchang(2, 6, 5));
