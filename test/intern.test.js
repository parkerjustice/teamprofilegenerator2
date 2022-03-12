const Intern = require('../lib/intern');

test('creates an object', () => {
    const intern = new Intern('Parker', 90, 'parkerjpiano@gmail.com', 'ECU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employees school', () => {
    const intern = new Intern('Parker', 90, 'parkerjpiano@gmail.com', 'ECU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('gets the role of employee', () => {
    const intern = new Intern('Parker', 90, 'parkerjpiano@gmail.com', 'ECU');

    expect(intern.getRole()).toEqual("Intern");
}); 