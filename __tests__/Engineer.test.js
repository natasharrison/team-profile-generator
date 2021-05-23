const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
    const engineer = new Engineer ('Natasha', 2, 'natasharrison@gmail.com', 'engineer', 'natasharrison');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('engineer');
    expect(engineer.github).toBe(expect.any(String));
}); 