// imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Profile = require('./lib/Profile');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
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
generateHtml('anything');

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

const allEmployees = [];
let data = '';
const intern1 = new Intern(inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.school); 
const intern2 = new Intern("Jane Doe", 2, "janedoe@msn.com", "Texas A&M University");
allEmployees.push(intern1);
allEmployees.push(intern2);

for(var i = 0; i <allEmployees.length; i++){
    const newMemberTemp = `
    <div class="col-3">
            <div class="card">
                <h3 class="card-header">${allEmployees[i].name}</h3>
                <br>
                <div class="card-body">
                    <div class ="role">${allEmployees.role}</div>
                    <p>ID: # ${allEmployees.id}</p>
                    <p>Email: <a href="mailto:${allEmployees.email}">${allEmployees.email}</a></p>
                    <p>Office: # ${allEmployees.office}</p>
                    <p>GitHub: <a href="https://github.com/${allEmployees.github}">${allEmployees.github}</a></p>
                    <p>School: ${allEmployees.school} </p>
                </div>
            </div>
        </div>`
data = data + newMemberTemp;
}

// fs.writeFileSync("./dist/profile.html", generateHtml(data));


console.log(allEmployees);
initializeProfile();