
const assertEqual = require('./assertEqual');
// Function returns the first item in the array
const tail = function(array) {
  if (array.length > 2) {
    return array.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;
