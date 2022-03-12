const generatesim = require('./src/generateHTML');

const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = []; 

const theManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please state the manager', 
            validate: nameEntry => {
                if (nameEntry) {
                    return true;
                } else {
                    console.log ("Please state the managers name");
                    return false; 
                }
            }
        },
        {
        type: 'input',
        name: 'id',
        message: "Please state the managers identification",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Please state the managers identification")
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please state the managers email",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('please state the managers email')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please state the managers badge #",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ('Please state the managers badge #')
                return false; 
            } else {
                return true;
            }
        }
    }
])
.then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};