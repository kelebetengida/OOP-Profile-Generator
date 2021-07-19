const inquirer =require("inquirer");
const fs=require("fs");
const Intern=require("./library/Intern")
const Manager=require("./library/Manager")
const Engineer=require("./library/Engineer");
const Employee = require("./library/Employee");
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
    message: 'What is team managers email?',
  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is team managers Github Username?',
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
    choices: ['internQuestion', 'engineerQuestion', 'managerQuestion','addemployee']
  },
] 

const askNext=()=>{
  inquirer.prompt(whatsNextQuestion)
  .then((answers)=>{
    

    if (answers.OPTION==='internQuestion'){
      return inquirer.prompt(internQuestion)
    } else if (answers.OPTION==='engineerQuestion'){
      return inquirer.prompt(engineerQuestion)
    }else if (answers.OPTION==='managerQuestion'){
      return inquirer.prompt(managerQuestion)
    }else if (answers.OPTION==='addemployee'){
      return inquirer.prompt(whatsNextQuestion)
    }
      
     
  })
}
const askManager=()=>{
  inquirer.prompt(managerQuestion)
  .then((answers)=>{
      const manager=new Manager(answers.name, answers.id, answers.email, answers.officenumber)
      console.log(answers)
      teamArray.push(manager)
  })
}
const askEngineer=()=>{
  inquirer.prompt(engineerQuestion)
  .then((answers)=>{
      const engineer=new Engineer(answers.name, answers.id, answers.email, answers.Github)
      console.log(answers)
      teamArray.push(engineer)
  })
}
const askIntern=()=>{
  inquirer.prompt(internQuestion)
  .then((answers)=>{
      const intern=new Intern(answers.name, answers.id, answers.email, answers.school)
      console.log(answers)
      teamArray.push(intern)
  })
}
askNext()


/*


function writeToFile(fileName, data) {
  const readMeContent=generateMarkdown(data);
  fs.writeFileSync(fileName, readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
}

function init() {
 
      inquirer.prompt(questions).then(answers=>{
          writeToFile('index.html', answers)
      })
    }      

init();
  */