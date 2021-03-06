var express = require('express');

// 创建app
var app = express();

// 罗列路由中间件
// 当用户用GET请求访问/路径的时候
app.get('/', function (req, res) {
  // send函数可以自动调整UTF8字符集，但是只能发送一条。和end类似。但是send不能和write配合。
  res.send('<h1>我是首页</h1>');
});

// 当用户用GET请求访问/news路径的时候
app.get('/news', function (req, res) {
  res.send('<h1>我是新闻</h1>');
});

// 监听3000端口
app.listen(3000);
