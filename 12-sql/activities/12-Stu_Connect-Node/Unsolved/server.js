const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Allows user to log in to SQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

//Allows user to query from the database and run code after with the result of the data
db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
