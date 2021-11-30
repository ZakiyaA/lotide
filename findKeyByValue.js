
// Implement the function findKeyByValue
const findKeyByValue = function(objectToCheck, value) {
  const objectKeys = Object.keys(objectToCheck);
  for (let key of objectKeys) {
    if (objectToCheck[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;
