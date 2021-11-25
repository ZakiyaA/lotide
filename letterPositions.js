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
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  //logic to update results here
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        counter += 1;
        results[letter].push(counter);
      } else {
        counter += 1;
        results[letter] = [counter];
      }
    } else {
      counter += 1;
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello"), [1]);