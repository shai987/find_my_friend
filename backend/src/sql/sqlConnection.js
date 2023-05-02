import mysql from 'mysql2';

const db_user_details = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        // database: process.env.DATABASE,
});

// Connect to the MySQL
db_user_details.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL database");

        // Create users_details database if it doesn't exist
        db_user_details.query('CREATE DATABASE IF NOT EXISTS users_details', (err, result) => {
                if (err) throw err;
                console.log('Database created or already exists');

                // Use the database
                db_user_details.query('USE users_details', (err, result) => {
                        if (err) throw err;

                        // Create user table if it doesn't exist
                        // const sql = 'CREATE TABLE IF NOT EXISTS users (email VARCHAR(40) PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, user_password varchar(255) UNIQUE NOT NULL)';
                        //  for encryption user_password
                        const sql = 'CREATE TABLE IF NOT EXISTS users (email VARCHAR(40) PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, user_password varchar(255) NOT NULL)';

                        db_user_details.query(sql, (err, result) => {
                                if (err) throw err;
                                console.log("Table created or already exists");
                        });
                });
        });
});

export default db_user_details;