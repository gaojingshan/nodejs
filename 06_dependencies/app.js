var sl = require('solarlunar');
var rmb = require('rmb-x');
var py=require('Chinese-to-Pinyin');

// 农历对象
var obj = sl.solar2lunar(2020, 9, 20);
console.log(obj.monthCn);
console.log(obj.dayCn);

// 人民币大写
console.log(rmb(234234));

// 输出汉字的拼音
console.log(py('我是小可爱'));  
