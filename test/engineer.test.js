const Engineer = require('../lib/Engineer');

test('creates object', () => {
    const engineer = new Engineer('Parker', 90, 'parkerjpiano@gmail.com', 'ParkerJustice47');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets value', () => {
    const engineer = new Engineer('Parker', 90, 'parkerjpiano@gmail.com', 'ParkerJustice47');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer('Parker', 90, 'parkerjpiano@gmail.com', 'ParkerJustice47');

    expect(engineer.getRole()).toEqual("Engineer");
});