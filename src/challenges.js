/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  function invokeLimit(...args) {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  }
  return invokeLimit;
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {};
  function invokeCachedResults(...args) {
    if (cb in cache) {
      return cache[cb];
    }
    cache[cb] = cb(...args);
    return cb(...args);
  }
  return invokeCachedResults;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const values = [];
  
  function extractValues(innerObj) {
    Object.keys(innerObj).forEach((key) => {
      if (typeof innerObj[key] === 'object') return extractValues(innerObj[key]);
      values.push(innerObj[key]);
    });
  }
  extractValues(obj);
  const doesMatch = values.every(value => {
    return value === values[0];
  });

  return doesMatch;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  if (!Array.isArray(elements)) {
    return elements;
  }
  let array = [];
  for (let i = 0; i < elements.length; i++) {
    array = array.concat(flatten(elements[i]));
  }
  return array;
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
