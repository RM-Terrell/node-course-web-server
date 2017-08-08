const utils = require('./utils');

it('should add two numbers', () =>{
  var res = utils.add(33, 11);

  if(res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)
  }
}); // Mocha speak for a test case. Behavior driven dev
