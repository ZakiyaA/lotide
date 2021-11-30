
  // Function returns the first item in the array
const head = function (array) {
  if (array === []) {
    return undefined;
  }
  const header = array[0];
  return header;
}

module.exports = head;
  
