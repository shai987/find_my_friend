CREATE DATABASE users_details;
use users_details;
CREATE TABLE users (email VARCHAR(40) PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, user_password varchar(12) UNIQUE NOT NULL);