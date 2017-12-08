/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count === n) return null;
    count++;
    return cb(...args);
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  let cache = {};
  return (...arg) => {
    if (arg in cache) {
      cache = arg;
    } else {
      cache[arg] = cb(...arg);
      cache = cache[arg];
    }
    return cache;
  };
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  return str.split('').reverse().join('');
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  const index = 0;
  const objArr = Object.values(obj);

  const testFunct = (arr, i) => {
    while (i < arr.length - 1) {
      if (arr[i] !== arr[++i]) {
        return false;
      }
      return testFunct(arr, i);
    }
    return true;
  };
  return testFunct(objArr, index);
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  let out = [];
  each(elements, num => {
    if (Array.isArray(num)) {
      out = out.concat(flatten(num));
    } else {
      out.push(num);
    }
  });
  return out;
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
