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
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray[i] = cb(elements[i]);
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = n;
  function func(...args) {
    if (count > 0) {
      count -= 1;
      return cb(...args);
    }
    return null;
  }
  return func;
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  function func(...args) {
    if (Object.keys(cache).indexOf(args.toString()) === -1) {
      cache[args.toString()] = cb(...args);
    }
    return cache[args.toString()];
  }
  return func;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let initial = '';
  
  function recursivelyCheckMatchingLeaves(obj, initial) {
    let match = true;
    Object.keys(obj).forEach(function(key) {
      if (match) {
        if (typeof (obj[key]) === 'object') match = recursivelyCheckMatchingLeaves(obj[key], initial);
        else {
          if (initial === '') initial = obj[key];
          else {
            match = (obj[key] === initial);
          }
        }
      }
    });   
    return match;
  }
  return recursivelyCheckMatchingLeaves(obj, initial);
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  const finalArray = [];
  function recursivelyFlatten(elements, finalArray) {
    elements.forEach(function(element) {
      if (typeof(element) === 'object') recursivelyFlatten(element, finalArray);
      else {
        finalArray.push(element);
      }
    });
    return finalArray;
  }
  return recursivelyFlatten(elements, finalArray);
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
