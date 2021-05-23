const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a intern object', () => {
    const intern = new Intern ('Natasha', 2, 'natasharrison@gmail.com');

    expect(intern.name).toBe(expect.any(Object));
    expect(intern.id).toBe(expect.any(Number));
    expect(intern.email).toBe(expect.any(Object)); 
    expect(intern.role).toBe('intern');
    expect(intern.school).toBe(expect.any(Object));
}); 