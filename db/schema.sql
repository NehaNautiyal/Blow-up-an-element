drop database if exists element_db;
create database element_db;

use element_db;

create table elements 
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	blown_up BOOLEAN DEFAULT false,
	createdAT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);