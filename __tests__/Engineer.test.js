const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
    const engineer = new Engineer ('Natasha', 2, 'natasharrison@gmail.com', 'Engineer', 'natasharrison');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
}); 