const { exportAllDeclaration } = require('@babel/types')
const Manager = require('../lib/Manager')

test('get office number', () => {
    const manager = new Manager('bob', 1, 'email', 2)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('get employees role', () => {
    const manager = new Manager('Bob', 1, 'email', 2);
    const role = 'Manager'
    
    expect(manager.getRole()).toBe(role)
})