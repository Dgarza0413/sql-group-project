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

inquirer.prompt([
  {
    type: "list",
    message: "Welcome to GreatBay!! Select an Option",
    choices: ["Place Bid (Buy)", "Sell Item"],
    name: "listOptions"
  }

]).then(function (inquirerResponse) {
  if (inquirerResponse.list = "Place Bid (Buy)") {
    console.log("the place bid option was chosen")
  }
})







connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
  // afterConnection();
});