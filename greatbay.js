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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  createBid();
  
});

//post/bid/exit

//post  - grab user input and create row in category column
//item - grab user input and create row in item column
//starting bid price - ""starting bid price column
//loop bad to post/bid/exit

//bid - lists categories/pick category/list items from the category/user picks item/asks for bid/compare user input with starting bid, if too low, loop to beginning, if higher, update highest bid with user input, prompt you are the highest bidder

//exit - connection dot end

var bid = 5 ; //user bid input

function listCategories(){
  console.log("Listing categories\n");
  var query = connection.query(
    "SELECT category FROM auctions",
    function(err, res){
      if(err) throw err;
     
    }
  );
}

function listItems(){
  console.log("Listing items\n");
  var query = connection.query(
    "SELECT items FROM auctions",
    function(err, res){
      if(err) throw err;
     
    }
  );
}

function grabStartingBid(){
  console.log("Grabbing starting bid\n");
  var query = connection.query(
    "SELECT starting_bid FROM auctions",
    function(err, res){
      if(err) throw err;
     
    }
  );
}

function grabHighestBid(){
  console.log("Grabbing highest bid\n");
  var query = connection.query(
    "SELECT highest_bid FROM auctions",
    function(err, res){
      if(err) throw err;
     
    }
  );
}

function createBid() {
  console.log("Create a bid\n");
  var query = connection.query(
    "INSERT INTO auctions (highest_bid) VALUES (" + bid + ")",
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " bid inserted!\n");
    }
  );
}

function updateProduct() {
  console.log("Updating all bids...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteProduct() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
