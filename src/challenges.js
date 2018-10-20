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
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  return (...args) => {
    // returns callback function, parameters are whatever ...args inputted
    if (n > 0) {
      // only enters statement if the number of times its been called hasn't reached zero
      n--; // increments to prevent infinite loop
      return cb(...args); // returns the callback function
    }
    return null; // returns null per the requirements if n has reached 0
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {}; // "cache" object in closure scope
  return input => {
    // similarly to forEach(key), input is a user defined "parameter"
    if (Object.prototype.hasOwnProperty.call(cache, input)) {
      return cache[input];
    }
    return (cache[input] = cb(input));
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const leaves = [];
  const findLeaves = object => {
    Object.values(object).forEach(value => {
      if (value === Object(value)) return findLeaves(value);
      leaves.push(value);
    });
  };
  findLeaves(obj);
  return leaves.every(x => x === leaves[0]);
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  return elements.reduce((explored, toExplore) => {
    return explored.concat(Array.isArray(toExplore) ? flatten(toExplore) : toExplore);
  }, []);
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
