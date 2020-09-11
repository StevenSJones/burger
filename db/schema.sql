-- Drops the db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create the database and specified it for use.
CREATE DATABASE burgers_db;
-- Uses the database
USE burgers_db;
--  2. Inside of that database, make a table called "burgers" which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.
-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY (id)
);
