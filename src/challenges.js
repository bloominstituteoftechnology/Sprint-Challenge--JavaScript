/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  elements.forEach((ele, i) => {
    cb(ele, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return elements.map((ele, i) => {
    return cb(ele, i);
  });
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  return (...args) => {
    if (count === n) return null;
    count++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};

  return (...args) => {
    if (cache[args] !== undefined) return cache;
    cache[args] = args;
    return cb(...args);
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return str;
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let answer = true;
  let val = 0;

  const checkLeaves = (obj1) => {
    const daKeys = Object.keys(obj1);

    daKeys.forEach((ele) => {
      if (val === 0 && typeof ele !== 'object') {
        val = obj1[ele];
        return undefined;
      }
      if (typeof obj1[ele] === 'object') {
        return checkLeaves(obj1[ele]);
      }
      if (obj1[ele] !== val) {
        answer = false;
        return undefined;
      }

      return undefined;
    });
  };

  checkLeaves(obj);
  return answer;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let flat = [];

  elements.forEach((ele) => {
    if (Array.isArray(ele)) flat = flat.concat(flatten(ele));
    else flat.push(ele);
  });

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
