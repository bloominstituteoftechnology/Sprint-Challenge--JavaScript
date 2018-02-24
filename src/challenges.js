/* ======================== CallBacks Practice ============================ */
const each = ((elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // This only needs to work with arrays.
});

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  // Return the new array.
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
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
    if (Object.hasOwnProperty.call(cache, args)) return cache[args];
    cache[args] = cb(...args);
    return cache[args];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   newArr.push(arr[i]);
  // }
  if (str === '') {
    return '';
  } return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let checker = null;
  let conditioner = true;

  const checkMatch = (object) => {
    Object.keys(object).forEach((item) => {
      if (checker === null && typeof item !== 'object') {
        checker = object[item];
      }
      if (typeof object[item] === 'object') {
        return checkMatch(object[item]);
      }
      if (object[item] !== checker) {
        conditioner = false;
      }
    });
  };
  checkMatch(obj);
  return conditioner;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArray = newArray.concat(flatten(elements[i]));
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
