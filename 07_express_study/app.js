var express = require('express');

var url = require('url');

var formidable = require('formidable');

var fs = require('fs');

// 创建app
var app = express();

app.use(express.static('www'));

app.post('/tijiao', function (req, res) {
  var form = formidable({multiples: true});

  form.parse(req, (err, fields, files) => {
    console.log(fields);
    fs.appendFile('./信息.txt',`
        [姓名]${fields.name}
        [性别]${fields.sex}
        [年龄]${fields.age}
    `,function(){
        res.send('<h1>我们已经妥收您的表单</h1>')
    })
  });
});

app.listen(3000);
