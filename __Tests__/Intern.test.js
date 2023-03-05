const Intern = require('../lib/Intern');
const intern = new Intern('piercen', '4991230', 'phelms1999@gmail.com', 'UC Berkeley');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('piercen');
    expect(intern.id).toBe('4991230');
    expect(intern.email).toBe('phelms1999@gmail.com');
    expect(intern.school).toBe('UC Berkeley');
});

test('test if we can get the name from getName()', () => {
    expect(intern.getName()).toBe('piercen');
});

test('test if we can get the id from getId()', () => {
    expect(intern.getId()).toBe('4991230');
});

test('test if we can get the email from getEmail()', () => {
    expect(intern.getEmail()).toBe('phelms1999@gmail.com');
});

test('test if we can get the school name from getSchool()', () => {
    expect(intern.getSchool()).toBe('UC Berkeley');
});

test('test if we can get the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});