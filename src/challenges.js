/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; ++i) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const itemsList = [];
  each(elements, element => (itemsList.push(cb(element))));
  return itemsList;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
let count = 0;
return (...args) => {
  if (count === n) {
    return null;
  }
    count++;
    return cb(...args);
  };
};
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

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
  if (str.length === 1) return str;
  return reverseStr(str.slice(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
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
