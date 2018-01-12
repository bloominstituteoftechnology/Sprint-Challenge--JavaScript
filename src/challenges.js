/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  return elements.forEach((units, i) => cb(units, i));
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return elements.map(units => cb(units));
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let counter = 0;
  return (...args) => {
    if (counter < n) {
      counter++;
      return cb(...args);
    } return null;
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
  let i = 0;
  let duplicate = false;

  return (...args) => {
    duplicate = Object.keys(cache).forEach(key => {
      if (cache[key] === args) return true;
    });

    if (duplicate === false) {
      cache[i] = args;
      i++;
      cb(...args);
    } else {
      duplicate = false;
      return cache[i];
    }
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  let i = str.length--;

  //let reversed = ''; // If it is here as it needs to be, are there one
                       // too many function wrappings? Is it still closure?

  const closureFunc = function(str) {
    let reversed = '';
    return (str, i) => {
      if (i <= 0) return 0;
      reversed += str[i];
      return closureFunc(str, --i);
    }
  }
  closureFunc(str, i);
  return reversed;
};
console.log(reverseStr('qwerty'));

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
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
