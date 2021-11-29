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



  
module.exports = eqArrays;