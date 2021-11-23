 // Function returns the first item in the array
  const tail = function(array){
  if(array.length > 2){
    return array.slice(1);
  }else{
    return [];
  }
  }

// FUNCTION IMPLEMENTATION
const assertEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}

 // Find if the Two arrays are equal or not
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



  // TEST CODE
  tail(["Hello","Lighthouse", "Labs"])
  assertEqual( tail(["Hello","Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 