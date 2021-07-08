USE DB_eqrl84odw3w29es;

CREATE TABLE users (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(50),
email VARCHAR(50),
password VARCHAR(50),
createdAT TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE comics (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(50),
comments VARCHAR(500),
main_character VARCHAR(50),
author VARCHAR(100),
year INT,
cover VARCHAR(200),
createdAT TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);