const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

// array of questions for user

// function to write README file
const writeFile = answers => {
fs.writeFileSync('./develop/dist/ReadMe.md', generateMarkdown(answers))

}


// function call to initialize program


const init = () => {
  inquirer.prompt([
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
            message: 'What is your project description (Required)',
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
    .then(answers => {
        console.log("==============")
        console.log(answers)
        writeFile(answers) 
        console.log("==============")
    });
 };

init()
