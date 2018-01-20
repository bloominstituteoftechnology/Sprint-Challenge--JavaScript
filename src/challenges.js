/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const arr = [];

  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = n;
  return (...options) => {
    if (count > 0) {
      --count;
      return cb(...options);
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  const cache = {};
  return (...args) => {
    const keys = Object.keys(cache);
    const argsString = args.toString();
    if (keys.indexOf(argsString) !== -1) {
      return cache[argsString];
    }
    const result = cb(...args);
    cache[argsString] = result;
    return result;
  };
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
  if (typeof str === 'string') {
    const strArray = str.split('');
    return reverseStr(strArray);
  } else if (typeof str === 'object') {
    const reverseArray = str.reverse();
    const returnString = str.join('');
    return returnString;
  }
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  const values = [];
  function gatherValues(innerObj) {
    Object.keys(innerObj).forEach(key => {
      if (typeof innerObj[key] === 'object') {
        gatherValues(innerObj[key]);
      } else {
        values.push(innerObj[key]);
      }
    });
  }
  gatherValues(obj);
  const first = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] !== first) {
      return false;
    }
  }
  return true;
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
