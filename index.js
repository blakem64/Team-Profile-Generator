  import inquirer from "inquirer";
  import fs from "fs";
  import { Manager} from "./lib/Manager.js";
  import { template } from "./src/template";
  import { Intern } from "./lib/Intern.js";
  import { Engineer} from "./lib/Engineer.js";

  inquirer.prompt([

  {
    type: "input",
    name: "managername",
    message: "what is the manager's name?"

  },
  {
    type: "input",
    name: "manageremail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officenum",
    message: "What is the office number of the manager?"
  },
  {
  type: "input",
  name: "engineername",
  message: "what is the engineer name?",
  },
  
  {
    type: "input",
    name: "engineeremail",
    message: "what is the engineersemail?",
  },

  {
    type: "input",
    name: "engineergithub",
    message: "what is the engineer github?",
  },

  {
    type: "input",
    name: "internname",
    message: "what is the engineer name?",
  },
  {
    type: "input",
    name: "internemail",
    message: "what is the intern email?",
  },
  {
    type: "input",
    name: "internschool",
    message: "what is the interns school?",
  },

  ])
  
  .then((answers) => {
    const manger = new Manager(
      answers.managername,
      1,
      answers.manageremail,
      answers.officenum
    );
    const intern = new Intern(
      answers.internname,
      3,
      answers.internemail,
      answers.intershool
    );
    fs.writeFileSync("dist/output.html", template(manager));
  })

  .catch((error) => {
    console.log(error);
 
  });