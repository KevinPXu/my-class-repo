// TODO: Import express
const express = require("express");
// TODO: Import 'terms.json' file
const termData = require("./terms.json");

const app = express();

const PORT = 3001;
// TODO: Initialize app variable

// TODO: Create a route for a GET request that will return the content of our `termData.json` file
app.get("/", (req, res) => res.send("Visit https://localhost:3001/api/terms"));

app.get("/api/terms", (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
