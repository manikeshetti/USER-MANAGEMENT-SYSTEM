
--creating a database
CREATE DATABASE users_info;


--using the database
use users_info;

--creating a new table
CREATE TABLE users1(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    fathername VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL ,
    phone BIGINT(10) NOT NULL,
    college VARCHAR(50) NOT NULL ,
    per_address VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL
);


--shows tables present in database
show tables;
--describes the table
describe users;