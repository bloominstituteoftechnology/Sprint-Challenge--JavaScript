/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // elements.forEach((x) => {
  //   return cb(x);
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};
const map = (elements, cb) => {
  return elements.map(cb);
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let i = 0;
  return (...args) => {
    if (i < n) {
      i++;
      return cb(...args);
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  const cache = {};
  return (...args) => {
    if (Object.prototype.hasOwnProperty.call(cache, ...args)) {
      return cache[args];
    }
    return cache[args] = cb(...args);
  };
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked oncme for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str === '') {
    return '';
  }
  const reversestring = reverseStr(str.substr(1)) + str.charAt(0);
  return reversestring;
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  const leaves = [];
  const findLeaves = object => {
    Object.values(object).forEach(value => {
      if (value === Object(value)) {
        findLeaves(value);
      } else {
        leaves.push(value);
      }
    });
  };
  findLeaves(obj);
  return leaves.every(x => x === leaves[0]);
  // const simplify = input => {
  //   if (Object(input) !== input) return input;
  //   const keys = Object.keys(input);
  //   const firstVal = input[keys[0]];
  //   return Object(firstVal) === firstVal ? simplify(firstVal) : firstVal;
  // };
  // const keys = Object.keys(obj);
  // const firstVal = obj[keys[0]];
  // for (let i = 0; i < keys.length; i++) {
  //   const currentVal = obj[keys[i]];
  //   if (Object(currentVal) === currentVal && !checkMatchingLeaves(
  //     currentVal)) return false;
  //   if (simplify(currentVal) === currentVal && !checkMatchingLeaves(
  //     currentVal)) return false;
  //   if (simplify(currentVal) !== simplify(firstVal)) return false;
  // }
  // return true;
  // return true if every property on `obj` is the same
  // otherwise return false
};

const reduce = (elements, cb, startingValue) => {
  let i = 0;
  if (startingValue === undefined) {
    startingValue = elements[0];
    i++;
  }
  for (; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
};

const flatten = elements => {
  return reduce(elements, (memo, item) => {
    if (Array.isArray(item)) return memo.concat(flatten(item));
    return memo.concat(item);
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
