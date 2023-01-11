import inquirer from "inquirer";
import fs from "fs";
import { Manager} from "./lib/Manager.js";

inquirer.prompt([

  {
    type: "input",
    name: "managername",
    message: "what is the manager's name?"

  },
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },

])

.then ((answers) => {
  fs.writeFileSync(
    "dist/output.html",
    `
    <h1> My manager name </h1>
    <h3> ${answers.managername} </h3>
    
    
    
    `
  );
});

.catch((error) => {
  console.log(error);
});
