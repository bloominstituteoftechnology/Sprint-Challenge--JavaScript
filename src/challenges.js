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
    arr.push(cb(elements[i]));
  }
  return arr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  return (...args) => {
    if (n >= 1) {
      n--;
      return cb(...args);
    }
    return;
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  let cache = null;
  return (...args) => {
    // when invoking cb the second time with the same argument, cache and args supposed to be same data but
    // testing this code on repl.it, i get cache !== args equal to true
    // when a console.log(cache, args) looks to be the same data
    if (cache !== args) {
      cache = args;
      return cb(...args);
    }
    return cache;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!

  // substr removes 1 charactor off of 'str', charAt removes 1 charactor off of str
  // at index 0 then concat them together in reverse.
  if (str.length > 1) {
    return reverseStr(str.substr(1)) + str.charAt(0);
  }
  return str;
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false

  //* loop through object, retrieve object key. loop through object key...
  //if the type of obj[key] is an object then call checkMatchingLeaves again to step into current key object
  //check if objProp (property) matches, if it does then change matching to true and return.
  const objProp = Object.keys(obj)[0];
  let matching = false;
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      checkMatchingLeaves(obj[key]);
    } else if (objProp === key) {
      matching = true;
    }
    return matching;
  });
};

const flatten = elements => {
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
