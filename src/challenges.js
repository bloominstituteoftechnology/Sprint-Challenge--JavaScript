/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let i = 0;
  return (...num) => {
    if (i < n) {
      i++;
      return cb(...num);
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  const cache = {};
  return (...nums) => {
    const key = nums.join();
    if (!(key in cache)) {
      cache[key] = cb(...nums);
    }
    return cache[key];
  };
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars *

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str.length === 0) return '';
  return reverseStr(str.slice(1)) + str[0];
};
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
const checkMatchingLeaves = obj => {
  const arr = [];
  const flatten = obj1 => {
    const valu = Object.values(obj1);
    for (let i = 0; i < valu.length; i++) {
      if (typeof (valu[i]) === 'object') {
        flatten(valu[i]);
      } else arr.push(valu[i]);
    }
  };
  flatten(obj);
  return arr.every(val => val === arr[0]);
};

const flatten = elements => {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i]) === true) {
      result = result.concat(flatten(elements[i]));
    } else {
      result.push(elements[i]);
    }
  }
  return result;
};
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
