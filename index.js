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
    name: 'github',
    message: "Team intern's school name:"
  }
];
// presented with menu that has options to add an engineer or intern or finish building team

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

const generateHtml = (name, github) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="team-profile-generator/dist/style.css" />
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="m-5 row justify-content-around">
        <div class="col-3">
            <div class="card">
                <h3 class="card-header">${name}</h3>
                <br>
                <div class="card-body">
                    <p>${title}</p>
                    <p>ID #: ${id}</p>
                    <p><a href="mailto:${email}">Email: ${email}</a></p>
                    <p>Office #: </p>
                    <p><a href="https://github.com/${github}">Github</a></p>
                    <p>School: </p>
                </div>
            </div>
        </div>
    </main>
</body>
  `;
};

initializeProfile();