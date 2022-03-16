const generatesim = require('./src/generateHTML');
const Intern = require('./lib/Intern'); 
const theManager = require('./lib/Manager');
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
.then (managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};

const addEmployee = () => {
    console.log(`
adding employees
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Chose their roles",
            choices: ['engineer', 'Iintern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's their name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter their name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter their id",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter their id")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter their email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter their')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter their username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter their username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter their school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter their school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more people?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("profile has been created go to index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });