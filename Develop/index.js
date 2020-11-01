const inquirer = require('inquirer')

// array of questions for user

const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

const promptUser = () => {
 return inquirer
    .prompt([
      
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your name.');
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'project',
            message: 'Enter your project name (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter your project's name.");
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'about',
            message: 'Enter project description (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter your project's description.");
                  return false;
                }
              }
           }
    ])
    .then(answers => console.log(answers))


}




promptUser()