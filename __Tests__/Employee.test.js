const Employee = require('../lib/Employee');
const employee = new Employee('piercen', '4991230', 'phelms1999@gmail.com');

test('test if we can get constructor values for the employee object', () => {
    expect(employee.name).toBe('piercen');
    expect(employee.id).toBe('4991230');
    expect(employee.email).toBe('phelms1999@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('piercen');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('4991230');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('phelms1999@gmail.com');
});

test('test if we  get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});