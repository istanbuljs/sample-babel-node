var assert = require('assert'),
    Animal = require('../index').Animal,
    a = new Animal();

assert.ok(Animal.getName() === 'Animal');
assert.ok(a.sayHi() == 'Hi, I am an animal');



