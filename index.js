  const inquirer = require("inquirer");
  const fs = require("fs");
  const  Manager = require ("./lib/Manager.js");
  const  template= require ("./src/template.js");
  const Intern  = ("./lib/Intern.js");
  const  Engineer = ("./lib/Engineer.js");

  inquirer.prompt([

  {
    type: "input",
    name: "managername",
    message: "what is the manager's name?"

  },
  {
    type: "input",
    name: "managerid",
    message: "What is the employees ID number?",
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
    name: "internname",
    message: "what is the interns name?",
  },
  {
    type: "input",
    name: "internid",
    message: "What is the employees ID number?",
  },
  {
    type: "input",
    name: "internemail",
    message: "what is the interns email?",
  },
  {
    type: "input",
    name: "school",
    message: "what is the interns school?",
  },
  {
    type: "input",
    name: "engineername",
    message: "what is the engineer name?",
    },
    {
      type: "input",
      name: "engineerid",
      message: "What is the employees ID number?",
    },
    {
      type: "input",
      name: "engineeremail",
      message: "what is the engineers email?",
    },
  
    {
      type: "input",
      name: "github",
      message: "what is the engineers github?",
    },
  

  ])
  
  .then((answers) => {
    const manager = new Manager(
      answers.managername,
      answers.managerid,
      answers.manageremail,
      answers.officenum
    );
    const intern = new Intern(
      answers.internname,
      answers.internid,
      answers.internemail,
      answers.school,
    );
    const engineer = new Engineer(
      answers.engineername,
      answers.engineerid,
      answers.engineeremail,
      answers.github,

    )
    fs.writeFileSync("dist/output.html", template(manager));
  })

  .catch((error) => {
    console.log(error);
  });