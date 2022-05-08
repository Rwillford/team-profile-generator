const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = []

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?'
        },
    ])
    .then((answers) =>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager)
        addToTeam()
    })
}

const addToTeam = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add more  employees to the team?',
            default: true
        }
    ])
    .then((answer) => {
        if(answer.addAnother){
            addEmployee()
        } else {
            console.log(employees)
            generatePage()
        }
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role on the team?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub User Name?',
            when: ({role}) => {
                if (role === 'Engineer'){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you go to?',
            when: ({role}) => {
                if (role === 'Intern'){
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then ((answers) => {
        if (answers.role === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer)
        } else {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(intern)
        }
        addToTeam()
    })
}


addManager()






























