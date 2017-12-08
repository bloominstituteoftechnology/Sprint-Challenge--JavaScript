/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i, elements);
    }
  } else if (elements === null) {
    return elements;
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const result = [];

  each(elements, item => {
    result.push(cb(item));
  });

  return result;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  return (...args) => {
    if (n === count) {
      return null;
    }

    count++;
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
  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  return str.split('').reverse().join('');
};

const leavesHelper = (obj, sample, result) => {
  Object.keys(obj).forEach(el => {
    if (obj[el] !== sample && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = leavesHelper(obj[el], sample, result);
    }
  });

  return result;
};

const checkMatchingLeaves = (obj, result = false) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const sample = Object.values(obj)[0];
  result = true;
  const a = Object.keys(obj);

  a.forEach(el => {
    if (obj[el] !== sample && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = leavesHelper(obj[el], sample, result);
    }
  });

  return result;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  each(elements, element => {
    if (Array.isArray(element)) {
      elements = flatten([].concat([], ...elements));
    }
  });

  return elements;
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
