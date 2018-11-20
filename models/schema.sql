DROP DATABASE IF EXISTS a3t7g6zh8ynzwgit;
CREATE DATABASE a3t7g6zh8ynzwgit;

USE garage_sailor;

CREATE TABLE buyers (
	item_id INTEGER(11) NOT NULL,
	addresses VARCHAR(20) NOT NULL,
	PRIMARY KEY (item_id)
);
    
CREATE TABLE sellers (
    address_ID INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    products VARCHAR(100) NOT NULL,
    costs DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(address_ID));

INSERT INTO Departments(address, products, cost)
VALUES (",", ",", ",");
