var express = require('express');
// url模块是内置模块，不需要装依赖，用来拆解URL的
var url = require('url');

// 创建app
var app = express();

// 只需要写一句话，就能够实现静态化文件夹
// 什么叫做静态化呢？就是能够显示不需要预编译的文件html、js、css、 jpg、png
// use表示使用插件
// 说白了，就是这个文件夹中的所有内容都会有自动的路由。www就是文件夹的名字。 /www就是文件的前缀，一般不使用
// app.use('/www',express.static('www'));
// app.use(express.static('www'));

// 罗列路由中间件
app.get('/show', function (req, res) {
  // console.log(req.url); //  /show?a=2&b=10

  // console.log(url.parse(req.url)); // url.parse用来拆解URL的，生成一个对象

  // console.log(url.parse(req.url).query); // a=2&b=10 字符串

  // console.log(url.parse(req.url,true).query);//在req.url后面加个true,就可以把字符串转换成对象[Object: null prototype] { a: '2', b: '10' }

  // 得到GET请求的参数a。url.parse()函数可以拆解URL，加上true参数表示把参数变为对象的形式
  var a = url.parse(req.url, true).query.a;
  var b = url.parse(req.url, true).query.b;
  var c = url.parse(req.url, true).query.c;

  res.send(`<h1>a参数是${a}，b参数是${b}，c参数是${c}</h1>`);
});

// 监听3000端口
app.listen(3000);
