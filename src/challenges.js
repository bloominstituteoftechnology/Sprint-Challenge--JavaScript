/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;   // initialize counter
  return (...args) => {   // return a function with unknown number of arguments
    if (n === count) return null;    // limit the counter to a max of n
    count++;
    return cb(...args);    // invoke callback with all the arguments
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  var first = str[0];
  var last = str[str.length -1];
  var str1 = reverseStr(str.substring(1, str.length - 1));
  return last + str1 + first;
};
// based on https://stackoverflow.com/questions/4859208/recursive-string-reversal-function-in-javascript

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  each(elements, element => {       // call each function to iterate over the array
    elements = flatten([].concat([], ...elements));   // flatten by breaking out nested arrays as we recursively call flatten function
  });
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
