var mysql      = require('mysql');
//1.创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mysqlstudy'
});
 //2.连接数据库
connection.connect();
//3.执行数据库
connection.query('INSERT INTO mysqlstudy VALUES(1,"admin","123465")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 //4.关闭数据库
connection.end();