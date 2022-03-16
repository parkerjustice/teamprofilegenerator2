const theEmployee = require("./employee");
class theEngineer extends theEmployee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = theEngineer; 