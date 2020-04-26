var http = require('http');

// 创建服务器
var server = http.createServer(function (req, res) {
    // 这个函数表示当有HTTP请求来了之后，做的事情
    // req.url表示用户访问的地址
    if (req.url == '/') {
        // 设置HTTP的响应头部
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // req是request请求，res是response表示响应
        // write表示写，end表示结束写，write的最后必须是end，否则小菊花会一直不能结束。end只能end一次，必须在所有write之后。
        res.write('<h1>你的服务器已经正确运行！</h1>');
        res.end('<h1>恭喜!!!我买了一个华为P' + (20 * 2) + '</h1>');
    } else if (req.url == '/news') {
        // 设置HTTP的响应头部
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // req是request请求，res是response表示响应
        // write表示写，end表示结束写
        res.end('<h1>这是新闻频道</h1>');
    }else {
        res.end('<a href="new.html">111</a>');
    }
});

// 服务器要监听一个端口号，默认是80，但是我们的80被占Apache用了
server.listen(8080);