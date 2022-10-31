const diagnostics = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");
const fs = require("fs");

// GET Route for retrieving diagnostic information
diagnostics.get("/", (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  fs.readFile("./db/diagnostics.json", "UTF-8", (err, data) => {
    res.json(data);
    if (err) {
      console.log(err);
    }
  });
});

// POST Route for a error logging
diagnostics.post("/", (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info(`${req.method} request received to add a review`);

  const { time, error_id } = req.body;
  const { tip, topic, username } = req.body.errors;

  if (time && error_id && tip && topic && username) {
    const newDiagnostic = {
      time,
      error_id,
      errors: {
        tip,
        topic,
        username,
      },
    };
    const fileData = JSON.parse(fs.readFileSync("./db/diagnostic.json"));

    // Convert the data to a string so we can save it

    fileData.push(newDiagnostic);

    const newFileData = JSON.stringify(fileData);
    // Write the string to a file
    fs.writeFile(`./db/diagnostic.json`, newFileData, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for ${newDiagnostic.errors.topic} has been written to JSON file`
          )
    );

    const response = {
      status: "success",
      body: newDiagnostic,
    };

    console.log(response);
    res.json(response);
  } else {
    res.json("Error in posting diagnostic");
  }
});

module.exports = diagnostics;
