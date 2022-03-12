const generatesim = require('./src/generateHTML');

const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = []; 