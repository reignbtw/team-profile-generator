const Engineer = require('../lib/Engineer');
const engineer = new Engineer('piercen', '4991230', 'phelms1999@gmail.com', '450', 'reignbtw');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('piercen');
    expect(engineer.id).toBe('4991230');
    expect(engineer.email).toBe('phelms1999@gmail.com');
    expect(engineer.githubUsername).toBe('reignbtw');
});

test('test if we can get the name from getName()', () => {
    expect(engineer.getName()).toBe('piercen');
});

test('test if we can get the id from getId()', () => {
    expect(engineer.getId()).toBe('4991230');
});

test('test if we can get the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('phelms1999@gmail.com');
});

test('test if we  can get the  office number from getGithub()', () => {
    expect(engineer.getGithub()).toBe('reignbtw');
});

test('test if we can get the role from  getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});