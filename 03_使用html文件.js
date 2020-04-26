var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    fs.readFile('./public/demo.html', function (err, content) {
      res.end(content.toString());
    });
  } else if (req.url == '/gougou.jpg') {
    fs.readFile('./public/gou.jpg', function () {
      res.end(content);
    });
  }
});

server.listen(3000);
