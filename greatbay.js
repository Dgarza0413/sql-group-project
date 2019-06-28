require('dotenv').config();
var mysql = require('mysql');
var inquirer = require("inquirer");

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

function startGreatBay() {
  inquirer.prompt([
    {
      type: "list",
      message: "Welcome to GreatBay!! Select an Option",
      choices: ["Place Bid (Buy)", "Sell Item"],
      name: "listOptions"
    },
    {
      type: "list",
      message: "you have selected SELL ITEM, what would you like to do",
      choices: ["sell item", "go back"],
      name: "sellOptions"
    },
    {
      type: "list",
      message: "",
      choices: [],
      name: ""
    }


  ]).then(function (inquirerResponse) {
    if (inquirerResponse.listOptions = "Place Bid (Buy)") {
      console.log("the place bid option was chosen")
    }
    if (inquirerResponse.listOptions = "Sell Item") {
      console.log("Sell item is selected")
      inquirerResponse.sellOptions
    }
  })
}

startGreatBay()






connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
  // afterConnection();
});

// function afterConnection(){
//   connection.query("SELECT title FROM songs WHERE genre = 'Pop Rock'", function(err, res){
//     if (err) throw err;
//     console.log(res);
//     connection.end();

//   });
// }
