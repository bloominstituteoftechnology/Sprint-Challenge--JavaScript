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
  const temp = [];
  for (let i = 0; i < elements.length; i++) {
    temp.push(cb(elements[i]));
  }
  return temp;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let counter = n;
  return (x, y, z) => {
    if (counter > 0) {
      counter--;
      return cb(x, y, z);
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
  return (arg) => {
    const keys = Object.keys(cache);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === arg) {
        return cache[arg];
      }
    }
    cache[arg] = cb(arg);
    return cache[arg];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str.length === 0) {
    return '';
  }
  return str.slice(-1) + reverseStr(str.slice(0, -1));
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof obj[keys[i + 1]] === 'object') {
      checkMatchingLeaves(obj[keys[i + 1]]);
    } else if (obj[keys[i]] !== obj[keys[i + 1]]) {
      return false;
    }
  }
  return true;
};
const flatten = (elements) => {
  const ele = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      const temp = flatten(elements[i]);
      for (let j = 0; j < temp.length; j++) {
        ele.push(temp[j]);
      }
    } else {
      ele.push(elements[i]);
    }
  }
  return ele;
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
