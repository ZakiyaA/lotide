// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};




// Implement the function findKeyByValue
const findKey = function(objectToCheck, callBack) {
  const objectKeys = Object.keys(objectToCheck);
  for (let key of objectKeys) {
    if (callBack(objectToCheck[key]) === true) {
        return key;
    }
  }
  return undefined;
};

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object, (x) => x.stars === 4),'Akaleri');