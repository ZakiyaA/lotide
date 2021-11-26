
//map function implementation
const map = function (array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
}
//eqArray function implementation
const eqArrays = function (array1, array2) {
  let output = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let element = 0; element < array1.length; element++) {
    if (array1[element] !== array2[element]) {
      return false;
    }
  }
  return output;
};
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm']);