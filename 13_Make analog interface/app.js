var express = require('express');
// url模块是内置模块，不需要装依赖，用来拆解URL的
var url = require('url');

// formidable是用来处理POST请求的
var formidable = require('formidable');

// 内置了一个模块
var path = require('path');

// 引入fs模块，写文件
var fs = require('fs');

// 引入mockjs依赖
var mockjs = require('mockjs');

// 创建app
var app = express();

// 只需要写一句话，就能够实现静态化文件夹
// 什么叫做静态化呢？就是能够显示不需要预编译的文件html、js、css、 jpg、png
// use表示使用插件
// 说白了，就是这个文件夹中的所有内容都会有自动的路由。www就是文件夹的名字。
app.use(express.static('www'));

// 监听3000端口
app.listen(3000);
