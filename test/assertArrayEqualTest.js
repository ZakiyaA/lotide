const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');



//TEST CODE
describe("#assertArraysEqual", () => {
  it("['my', 'name', 'Zakiya'], ['my', 'name', 'Zakiya']", () => {
    assert.strictEqual(assertArraysEqual(['my', 'name', 'name'], ['my', 'name', 'Zakiya'], true)); 
  });
  it("[1,2,34,5,'bob'], [1,2,34,5,'bob']", () => {
    assert.strictEqual(assertArraysEqual([1,2,34,5,'bob'], [1,2,34,5,'bob'], true)); 
  });
  it("['hi', 2, false], ['hi', 2, false]", () => {
    assert.strictEqual(assertArraysEqual(['hi', 2, false], ['hi', 2, false], true)); 
  });
  });

