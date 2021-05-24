const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a Manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
}); 

test('')
    // expect(manager.name).toEqual(expect.any(String));
    // expect(manager.id).toEqual(expect.any(Number));
    // expect(manager.email).toEqual(expect.any(String)); 
    // expect(manager.role).toEqual('Manager');
    // expect(manager.officeNumber).toEqual(expect.any(Number));
