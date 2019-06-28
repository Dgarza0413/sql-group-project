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
      choices: ["Buy_Item", "Sell_Item", "Add_Item"],
      name: "listOptions"
    },
    // {
    //   type: "list",
    //   message: "you selected SELL ITEM, what would you like to do",
    //   choices: ["sell options"],
    //   name: "sellItem"
    // },
    {
      type: "list",
      message: "",
      choices: [],
      name: "name"
    },
    {
      type: "input",
      message: "Input the item for sell",
      name: "addItem"
    },
    {
      type: "list",
      message: "Items to select",
      choices: ["Place a function or query in here???"],
      name: "populateItems"
    },
    {
      type: "list",
      choices: ["category list"],
      name: "category"
    }
  ]).then(function (inquirerResponse) {
    if (inquirerResponse.listOptions === "Buy Item") {
      console.log("Select Item for Bid")
    }
    else if (inquirerResponse.listOptions === "Sell Item") {
      console.log("Sell item is selected")
    }
    else if (inquirerResponse.listOptions === "Add Item") {
      console.log("add item")
    } else {
      console.log("please select item")
      inquirerResponse.listOptions
    }
  })
}





function addItem() {
  console.log("Creating a new auction.\n");
  var startingBid;
  var category;
  var item;
  var query = connection.query(
    "INSERT INTO auctions SET ?",
    {
      starting_bid: startingBid,
      category: category,
      item: item
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + "auction created!\n");
      // auction added, go back to start
      start();
    }
  )
}


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startGreatBay()

  // addItem();
  connection.end();
  // afterConnection();
});