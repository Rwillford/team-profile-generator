const Intern = require('../lib/Intern')

test('get there school name', () => {
    const intern = new Intern('Bob', 1, 'email', 'school');

    expect(intern.school).toBe('school');
})

test('get schooling', () => {
    const intern = new Intern('Bob', 1, 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

test('get employees role', () => {
    const intern = new Intern('bob', 1, 'email', 'school');
    const role = 'Intern'
    
    expect(intern.getRole()).toBe(role)
})