/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const arrMap = [];
  for (let i = 0; i < elements.length; i++) {
    arrMap.push(cb(elements[i]));
  }
  return arrMap;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let num = 0;
  return (...cha) => {
    if (num === n) {
      return null;
    }
    num++;
    return cb(...cha);  // Referenced material, forgot '...', not sure what they're doing.
  };

  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  let cache = {};
  let cacheDeposit = function(args) {
    // if ()
  }
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
  if (str.length === 0) {
    return str = '';
  }
  let swap = str[str.length - 1] + reverseStr(str.substring(0, (str.length)));
  return swap;
  // supposed to freeze last digit and move the others to the end beginning with the first.
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  let standard;
  let flag = true;
  const check = (x) => {
    Object.keys(x).forEach((y) => {
      if (standard === undefined && typeof y !== Object) {
        standard = x[y];
    } 
      if (typeof x[y] === Object) {
        return check(x[y]);
    }
      if (x[y] !== standard) {
        flag = false;
    }
  });
  check (obj);
  return flag;
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
