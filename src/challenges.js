/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) { cb(elements[i]); }
}; each([1, 2, 3], element => console.log(element));

const map = (elements, cb) => {
  const myElements = [];
  for (let i = 0; i < elements.length; i++) { myElements.push(cb(elements[i])); }
  return myElements;
}; console.log(map([1, 2, 3], element => element + 100));

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
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

};

const checkMatchingLeaves = obj => {
  const keys = Object.keys(obj);
  if (typeof obj[keys[0]] === 'object') { checkMatchingLeaves(obj[keys[0]]); }
  for (let i = 1; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') { checkMatchingLeaves(obj[keys[i]]); }
    if (obj[keys[i]] !== obj[keys[0]] && typeof obj[keys[i]] !== 'object') { return false; }
  }
  return true;
};

const flatten = elements => {
  const myElements = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      myElements.push.apply(myElements, (flatten(elements[i])));
    } else {
      myElements.push(elements[i]);
    }
  }
  return myElements;
}; console.log(flatten([1, 2, 3, 4, 5, [1, 2, 3, 4]]));

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
