// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement the function findKeyByValue
const findKeyByValue = function(objectToCheck, value) {
  const objectKeys = Object.keys(objectToCheck);
  for (let key of objectKeys) {
    if (objectToCheck[key] === value) {
      return objectToCheck[key];
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);