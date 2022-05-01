const Employee = require('../lib/Employee')

test('create a employee object', () => {
    const employee = new Employee('Bob', 1, 'email');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));  
})

test('Get employee name', () => {
    const employee = new Employee('Bob')
    
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
})

test('Get ID number', () => {
    const employee = new Employee('Bob', 1)

    expect(employee.getId()).toEqual(expect.any(Number));  
})

test('Get email', () => {
    const employee = new Employee('Bob', 1, 'email')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test('get employees role', () => {
    const employee = new Employee('Bob', 1, 'email');
    const role = 'Employee'
    
    expect(employee.getRole()).toBe(role)
})
