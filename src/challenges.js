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
  const tElements = [];
  for (let i = 0; i < elements.length; i++) {
    tElements[i] = cb(elements[i]);
  }
  return tElements;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  function limit(...arg) {
    if (count < n) {
      count++;
      return cb(...arg);
    }
    return null;
  }
  return limit;
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  function invokeNew(input) {
    if (Object.prototype.hasOwnProperty.call(cache, input)) {
      return cache[input];
    }
    cache[input] = cb(input);
    return cache[input];
  }
  return invokeNew;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  // return str.split('').reverse().join('');
  const rStr = function rStr(x) {
    return x.split('').reverse().join('');
  };
  return rStr(str);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let compare;
  let res = true;
  function check(objr) {
    Object.keys(objr).forEach(key => {
      if (compare === undefined && typeof key !== 'object') {
        compare = objr[key];
      }
      if (typeof objr[key] === 'object') {
        return check(objr[key]);
      }
      if (objr[key] !== compare) {
        res = false;
      }
    });
  }
  check(obj);
  return res;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      arr = arr.concat(flatten(elements[i]));
    } else {
      arr.push(elements[i]);
    }
  }
  return arr;
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
