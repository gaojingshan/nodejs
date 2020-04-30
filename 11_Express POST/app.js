var express = require('express');

// formidable是用来处理POST请求的
var formidable = require('formidable');
// 引入fs模块，写文件
var fs = require('fs');

// 创建app
var app = express();

// 只需要写一句话，就能够实现静态化文件夹
// 什么叫做静态化呢？就是能够显示不需要预编译的文件html、js、css、 jpg、png
// use表示使用插件
// 说白了，就是这个文件夹中的所有内容都会有自动的路由。www就是文件夹的名字。 /www就是文件的前缀，一般不使用
// app.use('/www',express.static('www'));
app.use(express.static('www'));

// 当用户用post请求访问提交的时候，做的事情
app.post('/tijiao', function (req, res) {
  // 用formidable这个第三方npm包，来处理POST请求的参数
  // https://www.npmjs.com/package/formidable
  const form = formidable({multiples: true});

  form.parse(req, (err, fields, files) => {
    // fields参数就是HTTP的报文体中的信息
    console.log(fields);
    // 追加文件
    fs.appendFile(
      './存储.txt',
      `
      [姓名] ${fields.name}
      [性别] ${fields.age}
      [年龄] ${fields.sex}
      ************************************
    `,
      function () {
        // 回调函数，表示当写完文件之后做的事情
        res.send('<h1>我们已妥收您的信息</h1>');
      }
    );
  });
});

// 监听3000端口
app.listen(3000);
