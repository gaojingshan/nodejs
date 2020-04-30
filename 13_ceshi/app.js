var express = require('express');
var mockjs = require('mockjs');
var Random = mockjs.Random;

var app = express();

app.get('/students', function (req, res) {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push({
      'name': Random.cname(),
      'age':Random.integer(20,40),
      'sex':Random.pick(['男','女'])
    });
  }
  res.json(arr);
});
app.listen(3000);
