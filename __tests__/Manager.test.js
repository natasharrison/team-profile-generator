const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a Manager object', () => {
    const manager = new Manager ('Natasha', 2, 'natasharrison@gmail.com');

    expect(manager.name).toBe(expect.any(Object));
    expect(manager.id).toBe(expect.any(Number));
    expect(manager.email).toBe(expect.any(Object)); 
    expect(manager.role).toBe('manager');
    expect(manager.officeNumber).toBe(expect.any(Number));
}); 