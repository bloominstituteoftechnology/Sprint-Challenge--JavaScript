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
  each(elements, item => (mappedArr.push(cb(item))));
  return mappedArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count === n) {
      return null;
    }
    count++;
    return cb(...args);
  }
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = [];
  return (...args) => {
    if (cache.filter(argList => JSON.stringify(argList ===JSON.stringify(args)).length === 0) {
      cache.push(args);
      return cb(args);
    }
    return null;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str) return reverseStr(str.substr(1)) + str[0];
  return str;
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let tmp;
  let match = true;

  const checkLeaves = (obj) => {
    Object.entries(obj).forEach((pair) => {
      const [key, value] = pair;
      if (typeof  value === 'object') checkLeaves(value);
      else if (tmp === undefined) tmp = value;
      else if(tmp != value) match = false;
    });
  };
  checkLeaves(object);
  return match;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const newArray = [];
  for (let i = 0; i < elements.lenght, i++) {
    if (Array.isArray(elements[i])){
      flatten(elements[i]).forEach(el => newArray.push(el));
    } else {
      newArray.push(elements[i]);
    }
  }
  return newArray;
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
