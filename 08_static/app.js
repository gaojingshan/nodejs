var express = require('express');

// 创建app
var app = express();

// 只需要写一句话，就能够实现静态化文件夹
// 什么叫做静态化呢？就是能够显示不需要预编译的文件html、js、css、 jpg、png
// use表示使用插件
// 说白了，就是这个文件夹中的所有内容都会有自动的路由。www就是文件夹的名字。 /www就是文件的前缀，一般不使用
// app.use('/www',express.static('www'));
app.use(express.static('www'));

// 罗列路由中间件
// 当用户用GET请求访问/路径的时候
/* app.get('/', function (req, res) {
  // send函数可以自动调整UTF8字符集，但是只能发送一条。和end类似。但是send不能和write配合。
  res.send('<h1>我是首页</h1>');
}); */

// 当用户用GET请求访问/news路径的时候
app.get('/news', function (req, res) {
  res.send('<h1>我是新闻</h1>');
});

// 监听3000端口
app.listen(3000);
