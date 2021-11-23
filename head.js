// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }else if (actual !== expected){
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  };
  // Function returns the first item in the array
  const head = function(array){
  const header = array[0];
  return header;
  }
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head([ ]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");