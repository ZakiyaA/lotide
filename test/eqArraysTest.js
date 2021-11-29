const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE

assertEqual(eqArrays([1, 2, 9], [1, 2, 8]), true); // => should PASS