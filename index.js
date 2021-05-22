const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const Profile = require('./lib/Profile');
const generateHtml = require('./dist/generateHtml');


const managerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'First and last name of your team manager:'
	},
    {
		type: 'input',
		name: 'id',
		message: "Team manager's ID number:"
	},
	{
		type: 'input',
		name: 'email',
		message: "Team manager's email address:"
	},
	{
		type: 'input',
		name: 'office',
		message: "Team manager's office number:"
	}
];

// presented with menu that has options to add an engineer or intern or finish building team

const engineerQuestions = [
	{	
    type: 'input',
		name: 'name',
		message: 'First and last name of team engineer:'
	},
    {
		type: 'input',
		name: 'id',
		message: "Team engineer's ID number:"
	},
	{
		type: 'input',
		name: 'email',
		message: "Team engineer's email address:"
	},
	{
		type: 'input',
		name: 'github',
		message: "Team engineer's GitHub username:"
	}
];

// presented with menu that has options to add an engineer or intern or finish building team

const internQuestions = [
	{	
    type: 'input',
		name: 'name',
		message: 'First and last name of team intern:'
	},
    {
		type: 'input',
		name: 'id',
		message: "Team intern's ID number:"
	},
	{
		type: 'input',
		name: 'email',
		message: "Team intern's email address:"
	},
	{
		type: 'input',
		name: 'github',
		message: "Team intern's school:"
	}
];
// presented with menu that has options to add an engineer or intern or finish building team

const generateHtml = (name, github) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2>${title}</h2>
    <p>ID #: ${id}</p>
    <p><a href="mailto:${email}">Email: ${email}</a></p>
    <p>Office #: </p>
    <p><a href="https://github.com/${github}">Github</a></p>
    <p>School: </p>
  </body>
  </html>
  `;
};

// function to write HTML file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function initializeProfile(){
    inquirer.prompt(managerQuestions).then(inquirerResponses => {
        console.log('Generating HTML...');
        writeToFile('profile.html', generateHtml({ ...inquirerResponses}));
    });
};

initializeProfile();