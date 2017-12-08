/* ======================== CallBacks Practice ============================ */
// Iterates over a list of elements, yielding each in turn to the `cb` function. This only needs to work with arrays.
/* CHECK */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

// Produces a new array of values by mapping each value in list through a transformation function (iteratee). Return the new array.
/* CHECK */
const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

/* ======================== Closure Practice ============================ */
// Should return a function that invokes `cb`. The returned function should only allow `cb` to be invoked `n` times.
/* CHECK */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...rest) => {
    if (count === n) return null;
    count++;
    return cb(...rest);
  };
};

  // Should return a funciton that invokes `cb`. The cache should keep track of all arguments have been used to invoke this function. If the returned function is invoked with arguments that it has already seen then it should return the cached result and not invoke `cb` again. `cb` should only ever be invoked once for a given set of arguments.
const cacheFunction = cb => {
  const cache = {};
  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
// reverse str takes in a string and returns that string in reversed order. The only difference between the way you've solved this before and now is that you need to do it recursivley!
const reverseStr = str => {
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};


const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

  // Flattens a nested array (the nesting can be to any depth). Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
const flatten = elements => {
  let output = [];
  each(elements, num => {
    if (Array.isArray(num)) {
      output = output.concat(flatten(num));
    } else {
      output.push(num);
    }
  });
  return output;
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
