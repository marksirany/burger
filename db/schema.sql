DROP DATABASE IF EXISTS hamberders_database;

-- Create and use the burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the burgers table in the burgers_db --
CREATE TABLE burgers
(
    id INTEGER NOT NULL AUTO_INCREMENT
    burger_name VARCHAR(30),
    (30) NOT NULL ,
    devoured BOOLEAN NOT NUll default false,
    PRIMARY KEY (id)
);