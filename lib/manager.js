const theEmployee = require('./employee');
class theManager extends theEmployee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getRole () {
        return "manager";
    }
}
module.exports = theManager; 