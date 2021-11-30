const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

//TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe("#findKeyByValue", () => {
  it("returns drama for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
});


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);