const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
// TEST CODE
describe("#middle", () => {
  it("returns [4, 8, 9, 6] for [8, 9]", () => {
    assert.deepEqual(middle([4, 8, 9, 6]), [8, 9]);
  });
  it("returns [4, 8, 9] for 8", () => {
    assert.deepEqual(middle([4, 8, 9]), 8);
  });

});
//assertArraysEqual(middle([2, 3,5, 7,8,9]), [5, 7]);