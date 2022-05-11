const generateTeam = team => {

    const generateManager = manager =>{
        return `
        <div class="card">
        <div class="card-body bg-primary text-white p-4">
            <h5 class="card-title bg-primary text-white">${manager.getName()}</h5>
            <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()} </li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
    </div>`
    }

    const generateEngineer = engineer =>{
        return `
        <div class="card">
        <div class="card-body bg-primary text-white p-4">
            <h5 class="card-title bg-primary text-white">${engineer.getName()}</h5>
            <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()} </li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
            <li class="list-group-item"> Github Username: ${engineer.getGithub()} </li>
        </ul>
    </div>`
    }

    const generateIntern = intern =>{
        return `
        <div class="card">
        <div class="card-body bg-primary text-white p-4">
            <h5 class="card-title bg-primary text-white">${intern.getName()}</h5>
            <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()} </li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()} </li>
        </ul>
    </div>`
    }

    const finishedCards = []

    finishedCards.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));

    finishedCards.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));

    finishedCards.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""));

    return finishedCards.join("")

}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h2 class="p-4 text-center bg-danger text-white">My Team</h2>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex justify-content-center m-auto p-auto">
                    <!--cards of employees go here-->
                  ${generateTeam(team)}
                </div>
            </div>
        </div>
        
    </body>
    </html> `
}