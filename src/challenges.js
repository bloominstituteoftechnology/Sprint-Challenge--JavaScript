/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const result = [];
  elements.forEach(ele => {
    const newEle = cb(ele);
    result.push(newEle);
  });
  return result;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  const cache = {};
  return args => {
    if (!(args in cache)) {
      cache[args] = cb(args);
    }
    return cache[args];
  };
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};


const newFunc = cb => {
  const cache = {};
  return args => {
    if (!(args in cache)) {
      cache[args] = cb(args);
    }
    return cache[args];
  };
};
/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str.length <= 1) {  // base case
    return str;
  }
  return reverseStr(str.slice(1)) + str.charAt(0);
  // reverse str takes in a string and returns that string in reversed order str['heyth']
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  let flat = [];
  for (let i = 0; i < elements.length; i++) {
    const ele = elements[i];
    if (ele instanceof Array) {
      flat = flat.concat(flatten(ele));
    } else {
      flat.push(ele);
    }
  }
  return flat;
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
