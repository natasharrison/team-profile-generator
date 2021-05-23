const Intern = require("./lib/Intern");

const fs = require('fs');


const allEmployees = []
let data = '';
const intern2 = new Intern("Jane Doe", 2, "janedoe@msn.com", "Texas A&M University");
const intern1 = new Intern("Michell Brito", 1, "michellbp@msn.com", "Texas A&M University");
allEmployees.push(intern1);
allEmployees.push(intern2);
for(var i = 0; i <allEmployees.length; i++){
    const newMemberTemp = `
    <div>
    <p>${allEmployees[i].name}</p>
     <p>${allEmployees[i].id}</p>
      <p>${allEmployees[i].email}</p>
      </div>`
data = data + newMemberTemp;
}


 fs.writeFileSync("tutor.html", htmlTemp(data));




console.log(allEmployees)