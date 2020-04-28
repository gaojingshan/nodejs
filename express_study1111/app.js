var express = require('express');

var url = require('url');

var formidable = require('formidable');

var fs = require('fs');
var path = require('path');

var mockjs = require('mockjs');
var Random = mockjs.Random;

// 创建app
var app = express();

app.use(express.static('www'));

app.get('/students', function (req, res) {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push({
      'name': Random.cname(),
      'age': Random.integer(20, 30),
      'sex': Random.pick(['男', '女']),
    });
  }

  res.json(arr);
});

app.listen(3000);
