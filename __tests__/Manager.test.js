const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a Manager object', () => {
    const manager = new Manager ('Natasha', 2, 'natasharrison@gmail.com', 'Manager', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String)); 
    expect(manager.getRole()).toBe('Manager');
    expect(manager.office).toEqual(expect.any(Number));
});