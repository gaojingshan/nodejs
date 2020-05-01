var mockjs = require('mockjs');
var Random = mockjs.Random;

var mysql = require('mysql');
// 连接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});
connection.connect();

var count = 0;
function insert() {
  if (count == 10) {
    console.log('全部插入完毕');
    return;
  }
  count++;
  console.log('正在插入第' + count + '条');

  var post = {
    name: Random.cname(),
    age: Random.integer(20, 30),
    sex: Random.pick(['男', '女']),
    blood: Random.pick(['A', 'B', 'O', 'AB', '熊猫']),
    star: Random.pick(['白羊座', '双鱼座', '处女座', '巨蟹座']),
    ethnic: Random.pick(['汉族', '满族', '回族', '维吾尔族', '土家族', '苗族']),
  };

  connection.query('INSERT INTO student SET ?', post, function (
    error,
    results,
    fields
  ) {
    insert();
  });
}
insert();
