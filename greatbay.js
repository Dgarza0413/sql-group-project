require('dotenv').config();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASSWORD,
  database: "great_bayDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

// function afterConnection(){
//   connection.query("SELECT title FROM songs WHERE genre = 'Pop Rock'", function(err, res){
//     if (err) throw err;
//     console.log(res);
//     connection.end();

//   });
// }
