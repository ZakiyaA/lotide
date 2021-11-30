const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
describe("#eqArrays", () => {
  it("['my', 'name', 'Zakiya'], ['my', 'name', 'Zakiya']", () => {
    assert.strictEqual(assertEqual(eqArrays(['my', 'name', 'name'], ['my', 'name', 'Zakiya'], true))); 
  });
  });

