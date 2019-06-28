DROP DATABASE IF EXISTS great_bayDB;
CREATE DATABASE great_bayDB;
USE great_bayDB;
CREATE TABLE auctions(
id INT AUTO_INCREMENT NOT NULL,
bidder TEXT NULL,
starting_bid INT NOT NULL,
highest_bid DECIMAL (10,2),
category TEXT NOT NULL,
item TEXT NOT NULL,
PRIMARY KEY (id));

