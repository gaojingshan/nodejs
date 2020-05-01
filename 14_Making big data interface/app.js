var express = require('express');

var mysql = require('mysql');
// 连接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});
connection.connect();

var app = express();

app.get('/students', function (req, res) {

});
app.listen(3000);
