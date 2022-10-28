-- Write your Schema Here -- 
DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS customer_orders
CREATE TABLE customer_orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    customer_id INT NOT NULL, 
    order_details TEXT NOT NULL,
    FOREIGN KEY(customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);