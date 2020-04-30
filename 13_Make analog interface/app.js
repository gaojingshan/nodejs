var express = require('express');

// 引入mockjs依赖
var mockjs = require('mockjs');

// 创建随机对象
var Random = mockjs.Random;

// 创建app
var app = express();

app.get('/students', function (req, res) {
  // 构建一个数组
  var arr = [];
  // 推入10项
  for (var i = 0; i < 10; i++) {
    arr.push({
      name: Random.cname(),
      age: Random.integer(20, 40),
      sex: Random.pick(['男', '女']),
    });
  }
  // 输出JSON
  res.json(arr)
});


// 监听3000端口
app.listen(3000);
