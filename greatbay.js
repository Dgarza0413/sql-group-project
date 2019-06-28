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

  grabHighestBid();
  
});

//post/bid/exit

//post  - grab user input and create row in category column
//item - grab user input and create row in item column
//starting bid price - ""starting bid price column
//loop bad to post/bid/exit

//bid - lists categories/pick category/list items from the category/user picks item/asks for bid/compare user input with starting bid, if too low, loop to beginning, if higher, update highest bid with user input, prompt you are the highest bidder

//exit - connection dot end

var bid = 5 ; //user bid input
var item = 'hairbrush'; //user input for item selection

function listCategories(){
  console.log("Listing categories\n");
  var query = connection.query(
    "SELECT category FROM auctions",
    function(err, res){
      if(err) throw err;
     console.log(res);
    }
  );
}

function listItems(){
  console.log("Listing items\n");
  var query = connection.query(
    "SELECT item FROM auctions",
    function(err, res){
      if(err) throw err;
      console.log(res);     
    }
  );
}

function grabStartingBid(){
  console.log("Grabbing starting bid\n");
  var query = connection.query(
    "SELECT starting_bid FROM auctions WHERE item = '" + item + "'",
    function(err, res){
      if(err) throw err;
      console.log(res);     
    }
  );
}

function grabHighestBid(){
  console.log("Grabbing highest bid\n");
  var query = connection.query(
    "SELECT highest_bid FROM auctions WHERE item = '" + item + "'",
    function(err, res){
      if(err) throw err;
      console.log(res);     
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
