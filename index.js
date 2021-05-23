// imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Profile = require('./lib/Profile');
const generateHtml = require('./src/generateHtml');

// array of questions for user input 
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'First and last name of your team member:',
    validate: employeeName => {
      if (employeeName) {
        return true;
      } else {
        console.log('Please enter the name of your employee!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Team member's ID number:",
    validate: employeeID => {
      if (employeeID) {
        return true;
      } else {
        console.log('Please enter the employee ID number!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Team member's email address:",
    validate: employeeEmail => {
      if (employeeEmail) {
        return true;
      } else {
        console.log('Please enter the employee email address!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'role',
    message: 'What type of role would you like to add?',
    choices: ["manager", "engineer", "intern"]
  },
  // only for manager 
  {
    type: 'input',
    name: 'office',
    message: "Team manager's office number:",
    validate: employeeOffice => {
      if (employeeOffice) {
        return true;
      } else {
        console.log('Please enter the office number!');
        return false;
      }
    },
   when: (answers) => answers.role === 'manager'
  },
  // only for engineer
  {
    type: 'input',
    name: 'github',
    message: "Team engineer's GitHub username:",
    validate: employeeGithub => {
      if (employeeGithub) {
        return true;
      } else {
        console.log('Please enter the employee GitHub username!');
        return false;
      }
    }, 
    when: (answers) => answers.role === 'engineer'

  },
  // only for intern
  {
    type: 'input',
    name: 'school',
    message: "Team intern's school name:",
    validate: employeeSchool => {
      if (employeeSchool) {
        return true;
      } else {
        console.log('Please enter the name of the school!');
        return false;
      }
    }, 
       when: (answers) => answers.role === 'intern'
  },
  {
    type: 'confirm',
    name: 'repeat',
    message: "Would you like to enter another team member?",
    default: false
  }, 
];

// function to write HTML file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function initializeProfile() {
  inquirer.prompt(questions).then(inquirerResponses => {
    if (inquirerResponses.repeat === true) {
      initializeProfile() 
    } else {
    console.log('Generating HTML...');
    writeToFile('./dist/profile.html', generateHtml({ ...inquirerResponses }));
    }
  });
};

initializeProfile();