var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('<h1>你的服务器已经开启</h1>');
    res.end('<h1>恭喜</h1>');
  } else if (req.url == '/news') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<h1>我是新闻</h1>');
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.statusCode = 404;
    res.end('<h1>没有这个页面</h1>');
  }
});
server.listen(3000);
