const inquirer =require("inquirer");
const fs=require("fs");
const Intern=require("./lib/Intern")
const Manager=require("./lib/Manager")
const Engineer=require("./lib/Engineer");
const Employee = require("./lib/Employee");
const { generate } = require("rxjs");
const teamArray=[];


const managerQuestion=[
  {
    type: 'input',
    name: 'name',
    message: 'What is team managers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is team managers id',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is team managers email?',
  },
  {
    type: 'options',
    name: 'officenumber',
    message: 'What is team managers officenumber?',
  },
] 

const engineerQuestion=[
  {
    type: 'input',
    name: 'name',
    message: 'What is your engineers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your engineers id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your engineers email?',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your engineers Github Username?',
  },
] 

const internQuestion=[
  {
    type: 'input',
    name: 'name',
    message: 'What is the interns name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is interns id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the interns email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is interns school name?',
  },
  
] 

const whatsNextQuestion=[
  {
    type: 'list',
    name: 'OPTION',
    message: 'Which type of team member would you like to edit?',
    choices: ['internQuestion', 'engineerQuestion', 'managerQuestion','done']
  },
] 





const askNext=()=>{
  inquirer.prompt(whatsNextQuestion)
  .then((answers)=>{
    

    if (answers.OPTION==='internQuestion'){
       askIntern()
    } else if (answers.OPTION==='engineerQuestion'){
      askEngineer()
    }else if (answers.OPTION==='managerQuestion'){
      askManager()
    }else if (answers.OPTION==='done'){
      return generateTeam()
    }
      
     
  })
}
const askManager=()=>{
  inquirer.prompt(managerQuestion)
  .then((answers)=>{
      const manager=new Manager(answers.name, answers.id, answers.email, answers.officenumber)
      console.log(answers)
      teamArray.push(manager)
      askNext()
  })
}
const askEngineer=()=>{
  inquirer.prompt(engineerQuestion)
  .then((answers)=>{
      const engineer=new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
      console.log(answers)
      teamArray.push(engineer)
      askNext()
  })
}

const askIntern=()=>{
  inquirer.prompt(internQuestion)
  .then((answers)=>{
      const intern=new Intern(answers.name, answers.id, answers.email, answers.school)
      console.log(answers)
      teamArray.push(intern)
      askNext()
  })
}
askNext()

function buildTeam(team){
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src=""></script>
    <style media="all" id="fa-v4-font-face"></style>
    <style media="all" id="fa-v4-shims"></style>
    <style media="all" id="fa-main"></style>
    <script rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>My Team</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body >
    <header class="container-fluid text-center text-white bg-danger p-2">
        
        <h1>My Team</h1>
    </header>
    <div class="container">
        <div class="row">
         <div class="team-area col-12 d-flex justify-content-start p-2">
          ${generateCard(team)}
         </div>
        </div>
    </div>
  </body>
  </html>  
        `
} 

const generateCard=(team) => {
  const createManagerCard=(manager)=>{
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fa fa-coffee" aria-hidden="true">Manager</i></h3>
        </div>  
        <div class="card-body">
            <ul class=list-group>
                <li class="list-group-item">ID:${manager.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number:${manager.getOfficeNumber()}</li>
            </ul>
        </div>  
    `
  }
  const createEngineerCard=(engineer)=>{
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fa fa-coffee" aria-hidden="true">Engineer</i></h3>
        </div>  
        <div class="card-body">
            <ul class=list-group>
                <li class="list-group-item">ID:${engineer.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>  
    `
  }
  const createInternCard=(intern)=>{
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fa fa-graduation-cap" aria-hidden="true">Intern</i></h3>
        </div>  
        <div class="card-body">
            <ul class=list-group>
                <li class="list-group-item">ID:${intern.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School:${intern.getSchool()}</li>
            </ul>
        </div>  
    `
  }

  const html=[]

  for(let i=0; i<team.length; i++){
    const temp=team[i]
    if(temp.getRole()==="Manager"){
      html.push(createManagerCard(temp))
    } else if(temp.getRole()==='Intern'){
      html.push(createInternCard(temp))
    } else {html.push(createEngineerCard(temp))}
  }
  
  return html.join('')

}

const generateTeam= ()=>{
  fs.writeFileSync('team.html',buildTeam(teamArray))
}


