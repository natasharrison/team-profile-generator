const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name ='') {

        super(name);

        this.github = github;
    }

    getGithub(){

    }

    getRole(){
        // overridden to return 'Engineer'
    }
}

module.exports = Engineer;