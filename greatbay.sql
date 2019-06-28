DROP DATABASE IF EXISTS great_bayDB;
CREATE DATABASE great_bayDB;
USE great_bayDB;
CREATE TABLE auctions(
id INT AUTO_INCREMENT NULL,
bidder TEXT NULL,
starting_bid INT NULL,
highest_bid DECIMAL (10,2),
category TEXT NULL,
item TEXT NULL,
PRIMARY KEY (id));

