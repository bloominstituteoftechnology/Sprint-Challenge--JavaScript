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
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let timesInvoked = 0;
  return function invoked(...args) {
    if (timesInvoked >= n) return null;
    timesInvoked++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return function invoked(args) {
    if (Object.prototype.hasOwnProperty.call(cache, args)) {
      return cache[args];
    }
    cache[args] = cb(args);
    return cache[args];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
// note this test is working below even though it doesn't pass the test VVVVVVV
let revStr = '';
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (revStr.length < str.length) {
    revStr += str.charAt(str.length - revStr.length - 1);
    reverseStr(str);
  }
  return revStr;
};

let singleProp = null;
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      checkMatchingLeaves(obj[key]);
    } else if (singleProp === null) {
      singleProp = obj[key];
    } else if (singleProp !== obj[key]) {
      singleProp = 99;
    }
  });
  return (singleProp !== 99);
};

const finArr = [];
const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i]) === true) {
      flatten(elements[i]);
    } else {
      finArr.push(elements[i]);
    }
  }
  return finArr;
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
