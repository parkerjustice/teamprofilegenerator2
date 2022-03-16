const theEmployee = require('./employee');
class theIntern extends theEmployee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}

module.exports = theIntern; 