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
// FUNCTION IMPLEMENTATION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      return [array[array.length / 2 - 1] , array[array.length / 2] ];
    } else {
      return array[Math.floor(array.length / 2)];
    }
  }
};
