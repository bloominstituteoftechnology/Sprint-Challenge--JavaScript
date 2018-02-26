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
  const newE = [];
  for (let i = 0; i < elements.length; i++) {
    newE.push(cb(elements[i]));
  }
  return newE;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let limit = 0;
  return (...args) => {
    if (limit >= n) {
      return null;
    }
    limit++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (arg) => {
    if (!(arg in cache)) {
  cache[arg] = cb(arg);
    }
    return cache[arg];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const revStr = [];
  const newStr = str.slice();
  if (newStr.length === 0) {
    return newStr;
  }
  const splitStr = newStr.split('');
  const item = splitStr.splice(splitStr.length - 1, 1);
  revStr.push(item[0]);
  reverseStr(splitStr);
  return revStr.join('');
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const leaves = [];
  const getLeaves = (branch) => {
    // if it finds more than two leaves, it skips over everything else
    if (leaves.length <= 1) {
      if (typeof branch === 'object') {
       arrayMethods.each(objectMethods.values(branch), twig => getLeaves(twig));
      } else if (leaves.indexOf(branch) < 0) {
        leaves.push(branch);
      }
    }
  };
  getLeaves(obj);
  return leaves.length <= 1;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const array = [];
  const cb = (item) => {
    if (item instanceof Array) {
  each(item, cb);
    } else {
      array.push(item);
    }
  };
  each(elements, cb);
  return array;
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
