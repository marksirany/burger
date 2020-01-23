DROP DATABASE IF EXISTS burgers_db;

-- Create and use the burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the burgers table in the burgers_db --
CREATE TABLE burgers
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (30) NOT NULL ,
    devoured BOOLEAN DEFAULT false NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    PRIMARY KEY
    (id);
)