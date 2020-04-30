var express = require('express');
// url模块是内置模块，不需要装依赖，用来拆解URL的
var url = require('url');
var formidable = require('formidable');

var fs=require('fs');

// 创建app
var app = express();

// 只需要写一句话，就能够实现静态化文件夹
// 什么叫做静态化呢？就是能够显示不需要预编译的文件html、js、css、 jpg、png
// use表示使用插件
// 说白了，就是这个文件夹中的所有内容都会有自动的路由。www就是文件夹的名字。 /www就是文件的前缀，一般不使用
// app.use('/www',express.static('www'));
app.use(express.static('www'));

app.post('/tijiao', function (req, res) {
  const form = formidable({multiples: true});

  form.parse(req, (err, fields, files) => {
    console.log(fields);
    
    fs.appendFile('/存储.txt',`
    ${fields.name}
    `,function(){
      res.send('<h1>我们已妥收您的信息</h1>')
    })
  });
});

// 监听3000端口
app.listen(3000);
