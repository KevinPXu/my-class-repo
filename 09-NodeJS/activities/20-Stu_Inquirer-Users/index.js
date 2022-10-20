const inquirer = require("inquirer");
const fs = require("fs");

let name;
let languages;
let com;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "language",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "communication",
    },
  ])
  .then((response) => {
    fs.writeFile(
      "./test.txt",
      `My name is ${response.username}, i know ${response.language} and my preferred method of communication is ${response.communication}`,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
