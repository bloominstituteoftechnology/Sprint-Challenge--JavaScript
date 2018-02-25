/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i);
    }
  } else {
    return 'You must supply an array.';
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newElements = [];
  for (let i = 0; i < elements.length; i++) {
    newElements.push(cb(elements[i], i));
  }
  return newElements;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let calls = 0;
  return (...args) => {
    if (calls === n) {
      return null;
    }
    calls++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    }
    cache[n] = cb(n);
    return cache[n];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substring(1)) + str.charAt(0);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const values = Object.values(obj);
  return values.every((currentVal, i, flatArray) => currentVal === flatArray[0]);
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let myArray = [];
  elements.forEach((item) => {
    if (Array.isArray(item)) {
      myArray = myArray.concat(flatten(item));
    } else {
      myArray.push(item);
    }
  });
  return myArray;
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
