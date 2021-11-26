const without = function (source, itemsToRemove) {
  const newArr = [];
  //console.log(newArr);
  for (let item = 0; item < source.length; item++) {
    let eq = false;
    for (let item2 = 0; item2 < itemsToRemove.length; item2++) {
      if (source[item] === itemsToRemove[item2]) {
        eq = true;
        break;  
      } 
    }
    if (eq === false)
    newArr.push(source[item]);
  }
  return newArr;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

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


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => ["1", "2"])); // => ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);

