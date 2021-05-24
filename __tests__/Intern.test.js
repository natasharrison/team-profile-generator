const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a intern object', () => {
    const intern = new Intern ('Natasha', 2, 'natasharrison@gmail.com', 'Intern', 'arizona');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String)); 
    expect(intern.getRole()).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));
}); 