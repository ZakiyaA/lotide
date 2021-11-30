const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [4, 8, 9, 6] for [3, 4, 8, 9, 6]", () => {
    assert.deepEqual(tail([3, 4, 8, 9, 6]), [4, 8, 9, 6]);
  });
});
//console.log(tail([3,4,8,9,6]));