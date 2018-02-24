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
    newArray[i] = cb(elements[i]);
  } return newArray;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let nInvoked = 0;
  return (...args) => {
    if (nInvoked === n) return null;
    nInvoked++;
    return cb(...args);
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = (cb) => {
  const object = [];
  return (...args) => {

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
const reverseStr = (str) => {
  if (str.length === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = (obj) => {
  const leaves = [];
  const checkMatching = (object) => {
    Object.keys(object).forEach(key => {
      if (key === object(key)) {
        checkMatching(key);
      } else { 
        leaves.push(key);
    });
  };
    checkMatching(obj);
    return leaves.every(x => x === leaves[0]);
  
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = (elements) => {
  return elements.reduce((memo, el) => {
    return Array.isArray(el) ? memo.concat(flatten(el)) : memo.concat(el);
  }, []);
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
