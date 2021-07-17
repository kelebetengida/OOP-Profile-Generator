const inquirer =require("inquirer");
const fs=require("fs");
const Intern=require("./library/Intern")
const Manager=require("./library/Manager")
const Engineer=require("./library/Engineer")
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
    type: 'input',
    name: 'list',
    message: 'Which type of team member would you like to edit?',
    choices: ['internQuestions', 'engineerQuestion', 'managerQuestion']
  },
] 


const askManager=()=>{
  inquirer.prompt(managerQuestion)
  .then((answers)=>{
      const manager=new Manager(answers.name, answers.id, answers.email, answers.officenumber)
      console.log(answers)
      teamArray.push(manager)
  })
}
askManager()


const 
/*
const askWhatsNext=()=>inquirer
  .prompt(whatsNextQuestions)
  .then((whatsNextAnswers)=>{

    //Then decide what to do next with theor answer
  })

//inquirer.prompt() the user for manager information using iur managerquestion
inquirer 
  .prompt(managerQuestion)
  .then((managerAnswers) =>{

    //Then we need to create a new manager object with that data
    //And then new to ask the users what they want to do next(inquirer.prompt() with whatsNext Question )
      return inquirer
        .prompt(whatsNextQuestions)
        .then((whatsNextAnswer)=>{

        })
    //Then to use their answer to decide what to do next

  })

  .then(()=>{

//User employee obkects to create HTML page and write it to file

  })
  .catch((error)=>{
    if(error.isTyError){
      //prompt couldn't be rendered in the current enviroment 
    } else {


    }
  })

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