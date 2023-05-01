CREATE DATABASE users_details;
use users_details;
CREATE TABLE users (email VARCHAR(40) PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, user_password varchar(26) UNIQUE NOT NULL);

-- for encryption user_password
-- CREATE TABLE users (email VARCHAR(40) PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, user_password varchar(255) UNIQUE NOT NULL);