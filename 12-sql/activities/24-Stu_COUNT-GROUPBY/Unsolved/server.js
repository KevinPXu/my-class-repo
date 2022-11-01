//import packages to file
const express = require('express');
const mysql = require('mysql2');

//sets port the heroku port or if undefined 3001
const PORT = process.env.PORT || 3001;

//gives express methods a variable name
const app = express();

//middleware that allows express to parse json and urlencoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creates connection to mysql database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

//sets the id to alias of total_count and displays the total number of rows of each id in the table of favorite_books and will only give us the rows of true and false and the total number of each
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

//sets quantity to alias of total_in_section MAX quantity to max_quantity, MIN quantity to min_quantity, AVG quantity to avg_quantity from the favorite books db for each section
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
