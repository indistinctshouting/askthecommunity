DROP DATABASE IF EXISTS askthecommunity;

CREATE DATABASE askthecommunity;

USE askthecommunity;

CREATE TABLE iF NOT EXISTS questions (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text varchar(50) NOT NULL,
  user varchar(50) NOT NULL,
  restaurant_id int NOT NULL
);

CREATE TABLE answers (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text varchar(50) NOT NULL,
  user varchar(50) NOT NULL
  -- question_id int NOT NULL
  -- FOREIGN KEY (question_id)
  -- REFERENCES questions(id)
);

