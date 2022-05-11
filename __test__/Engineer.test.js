const Engineer = require('../lib/Engineer')

test('Get GitHub UserName', () => {
    const engineer = new Engineer('bob', 1, 'email', 'github');

    expect(engineer.github).toBe('github');
})

test('get github', () => {
    const engineer = new Engineer('bob', 1, 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

})

test('get employees role', () => {
    const engineer = new Engineer('bob', 1, 'email', 'github');
    const role = 'Engineer'
    
    expect(engineer.getRole()).toBe(role)
})