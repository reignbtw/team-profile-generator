const Manager = require('../lib/Manager');
const manager = new Manager('piercen', '4991230', 'phelms1999@gmail.com', '450');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('piercen');
    expect(manager.id).toBe('4991230');
    expect(manager.email).toBe('phelms1999@gmail.com');
    expect(manager.officeNumber).toBe('450');
});

test('test if we can get the name from getName()', () => {
    expect(manager.getName()).toBe('piercen');
});

test('test if we can get the id from getId()', () => {
    expect(manager.getId()).toBe('4991230');
});

test('test if we can get the email from getEmail()', () => {
    expect(manager.getEmail()).toBe('phelms1999@gmail.com');
});

test('test if we  can get the  office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('450');
});

test('test if we can get the role from  getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});