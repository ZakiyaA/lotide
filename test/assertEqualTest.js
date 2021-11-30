const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
// TEST CODE
describe("#assertEqual", () => {
  it("['my', 'name', 'Zakiya'], ['my', 'name', 'Zakiya']", () => {
    assert.strictEqual(assertEqual(['my', 'name', 'name'], ['my', 'name', 'Zakiya'], true)); 
  });
  });


