const Manager = require('../lib/manager');

test('creates object', () => {
    const manager = new Manager('Parker', 90, 'parkerjpiano@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employees roles', () => {
    const manager = new Manager('Parker', 90, 'parkerjpiano@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 