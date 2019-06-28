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

function postItem() {
  inquirer.prompt([
    {
      type: "input",
      message: "add your item",
      name: "addItem"
    },
    {
      type: "input",
      message: "Set your bid price",
      name: "costItem"
    }
  ])
}

function buyItem() {
  inquirer.prompt([
    {
      type: "list",
      message: "What item would you like to purchase",
      choices: [1, 2, 3, 4],
      name: "buyItem"
    }
  ])
}


function startGreatBay() {
  inquirer.prompt([
    {
      type: "list",
      message: "Welcome to GreatBay!! Select an Option",
      choices: ["Buy Item", "Add Item"],
      name: "listOptions"
    }
  ]).then(function (inquirerResponse) {
    if (inquirerResponse.listOptions === "Buy Item") {
      console.log("Select Item for Bid")
      buyItem();
    }
    else if (inquirerResponse.listOptions === "Add Item") {
      console.log("add item")
      postItem();

    } else {
      console.log("please select item")
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

//   grabHighestBid();

// });

// //post/bid/exit

// //post  - grab user input and create row in category column
// //item - grab user input and create row in item column
// //starting bid price - ""starting bid price column
// //loop bad to post/bid/exit

// //bid - lists categories/pick category/list items from the category/user picks item/asks for bid/compare user input with starting bid, if too low, loop to beginning, if higher, update highest bid with user input, prompt you are the highest bidder

// //exit - connection dot end

// var bid = 5 ; //user bid input
// var item = 'hairbrush'; //user input for item selection

// function listCategories(){
//   console.log("Listing categories\n");
//   var query = connection.query(
//     "SELECT category FROM auctions",
//     function(err, res){
//       if(err) throw err;
//      console.log(res);
//     }
//   );
// }

// function listItems(){
//   console.log("Listing items\n");
//   var query = connection.query(
//     "SELECT item FROM auctions",
//     function(err, res){
//       if(err) throw err;
//       console.log(res);     
//     }
//   );
// }

// function grabStartingBid(){
//   console.log("Grabbing starting bid\n");
//   var query = connection.query(
//     "SELECT starting_bid FROM auctions WHERE item = '" + item + "'",
//     function(err, res){
//       if(err) throw err;
//       console.log(res);     
//     }
//   );
// }

// function grabHighestBid(){
//   console.log("Grabbing highest bid\n");
//   var query = connection.query(
//     "SELECT highest_bid FROM auctions WHERE item = '" + item + "'",
//     function(err, res){
//       if(err) throw err;
//       console.log(res);     
//     }
//   );
// }

// function createBid() {
//   console.log("Create a bid\n");
//   var query = connection.query(
//     "INSERT INTO auctions (highest_bid) VALUES (" + bid + ")",
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " bid inserted!\n");
//     }
//   );
// }
