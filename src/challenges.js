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
  const mappedArray = [];
  for (let i = 0; i < elements.length; i++) {
    mappedArray.push(cb(elements[i]));
  }
  return mappedArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  const cbfunction = (...args) => {
    if (count < n) {
      count++;
      cb(...args);
    }
    return null;
  };
  return cbfunction;
};

const cacheFunction = cb => {
  const cache = {

  };
  const funct = (...args) => {
    let str = '';
    for (let i = 0; i < args.length; i++) {
      str += args[i].tostring();
    }
    if (cache.str !== undefined) {
      return cache.str;
    }
    cache.str = cb(...args);
    cb(...args);
  };
  return funct;
};
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.


/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  const matched = false;
  const values = Object.values(obj);
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  const flat = [];
  elements.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  }
);

  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  return flat;
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
