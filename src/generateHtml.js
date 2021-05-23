const index = require('index.js');
function greeter() {
  console.log('Hello');
}

function generateHtml(data) {
  greeter();
  console.log(data);
//     return `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>My Team</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
//     <link rel="stylesheet" href="./style.css" />
// </head>

// <body>
//     <header>
//         <h1>My Team</h1>
//     </header>

//     <main class="m-5 row justify-content-around">
//          ${data}
//     </main>
// </body>
//   `;
}

// // function to write HTML file using the user input
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// function initializeProfile() {
//   inquirer.prompt(questions).then(inquirerResponses => {
//     if (inquirerResponses.repeat === true) {
//       initializeProfile() 
//     } else {
//     console.log('Generating HTML...');
//     writeToFile('./dist/profile.html', generateHtml({ ...inquirerResponses }));
//     }
//   });
// };

module.exports = generateHtml;