const inquirer = require('inquirer')
const fs = require('fs');


// array of questions for user

// function to write README file
const writeFile = answers => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.develop/dist/ReadMe.md', answers, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}


// function call to initialize program


const init = (answers) => {
 return inquirer.prompt([
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
        console.log(answers)
    });
 };

init()
.then(answers => {
    console.log(answers)
   return writeFile(answers)   
  })