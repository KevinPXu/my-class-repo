-- Write your schema here --
DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);