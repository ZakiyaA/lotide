// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let element = 0; element < array1.length; element ++) {
    if (array1[element] !== array2[element]) {
      return false;
    }
  }
  return output;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS