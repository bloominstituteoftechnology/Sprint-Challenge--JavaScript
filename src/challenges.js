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
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i], i));
  }
  return arr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let numberOfCalls = 0;

  return (...args) => {
    if (numberOfCalls < n) {
      numberOfCalls++;
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
    if (args in cache) return cache;
    cache[args] = args;
    return cb(args);
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (!str) return str;
  return str.slice(str.length - 1).concat(reverseStr(str.slice(0, str.length - 1)));
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let flag = true;
  let val = 0;
  const checkLeaves = (ob) => {
    const myKeys = Object.keys(ob);
    myKeys.forEach((item) => {
      if (val === 0 && typeof item !== 'object') {
        val = ob[item];
        return undefined;
      }
      if (typeof ob[item] === 'object') {
        return checkLeaves(ob[item]);
      }
      if (ob[item] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return flag;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const output = [];
  const flattenNested = (elem) => {
    elem.forEach((element) => {
      if (Array.isArray(element)) {
        return flattenNested(element);
      }
      output.push(element);
      return undefined;
    });
  };
  flattenNested(elements);
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
