class Manager extends Employee {
    constructor(name = '') {
        this.name = name;
        this.officeNumber = officeNumber;
    }

    getRole(){
        // overridden to return 'Manager'
    }

}