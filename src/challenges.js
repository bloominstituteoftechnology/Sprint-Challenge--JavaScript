/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  elements.forEach((el, i) => cb(el, i));
};

const map = (elements, cb) => {
  return elements.map(el => cb(el));
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  const myFunc = () => {
    let count = 0;
    if (count < n) {
      return (...args) => {
        count++;
        cb(...args);
      };
    }
  };
  return myFunc();
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
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  const result = [];
  elements.forEach(el => {
    if (Array.isArray(el)) {
      flatten(el);
    } else {
      result.push(el);
    }
  });
  return result;
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
