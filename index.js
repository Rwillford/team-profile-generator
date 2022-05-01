const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


function initApp() {
    addMember();


}

function addMember() {
    return inquirer
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: 'What is your name?'
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
              type: 'list',
              name: 'role',
              message: 'What is your role?',
              choices: ['Engineer', 'Intern', 'Manager']
          }
      ])
      .then((answers) => {
          //console.log(answers);
          if(answers.role === 'Engineer') {
              return inquirer.prompt ({
                  type: 'input',
                  name: 'github',
                  message: 'What is your GitHub User Name?'
              })
            } else if (answers.role === 'Intern') {
                return inquirer.prompt ({
                    type: 'input',
                    name: 'school',
                    message: 'Where do you go to school?'
                })
                .then((data) => {
                    const intern = new Intern(answers.name, answers.id, answers.email, data.school)
                    console.log(intern)
                })
            } else if (answers.role === 'Manager') {
                return inquirer.prompt ({
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                })
                .then((data) => {
                    const manager = new Manager(answers.name, answers.id, answers.email, data.officeNumber)
                    console.log(manager)
                    // console.log(data)
                    // console.log(answers);
                })

            }
        })
        
}    
      

initApp();

