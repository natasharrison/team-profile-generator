const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {

        super(name);

        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        // overridden to return 'intern'
    }
}

module.exports = Intern;
