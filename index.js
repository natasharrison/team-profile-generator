const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const Profile = require('./lib/Profile');
const generateHtml = require('./dist/generateHtml');


const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'First and last name of your team member:'
  },
  {
    type: 'input',
    name: 'id',
    message: "Team member's ID number:"
  },
  {
    type: 'input',
    name: 'email',
    message: "Team member's email address:"
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
    message: "Team manager's office number:"
  },
  // only for engineer
  {
    type: 'input',
    name: 'github',
    message: "Team engineer's GitHub username:"
  },
  // only for intern
  {
    type: 'input',
    name: 'school',
    message: "Team intern's school name:"
  }, 
  {
    type:'confirm', 
    name: 'repeat',
    message: "Would you like to enter another team member?"
  }
  // if yes, repeat questions 
  // if no, generate html
];

// function to write HTML file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function initializeProfile() {
  inquirer.prompt(questions).then(inquirerResponses => {
    console.log('Generating HTML...');
    writeToFile('profile.html', generateHtml({ ...inquirerResponses }));
  });
};

initializeProfile();