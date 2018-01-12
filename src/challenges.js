/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // elements.forEach((value, index) => cb(value, index));
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  // return elements.map((value, index) => cb(value, index));
  const newarr = [];
  for (let i = 0; i < elements.length; i++) {
    newarr.push(cb(elements[i]));
  }
  return newarr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let i = 0;
  const resultFunction = (...args) => {
    i++;
    if (i < n) {
      return cb(...args);
    }
    return null;
  };
  return resultFunction;
};

const cacheFunction = cb => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // cache.reduce((memo, value) => ()
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const reduceToBool = (arrayToCheck, givenValue) => {
    if (arrayToCheck.length > 0) {
      arrayToCheck.reduce((memo, value) => {
        if (givenValue === value || memo === true) {
          return true;
        }
        return false;
      });
    }
  };
  const cache = {};
  return argToCheck => {
    const arrFromCache = Object.keys(cache).map(key => key);
    if (!reduceToBool(arrFromCache, argToCheck)) {
      cache[argToCheck] = cb(argToCheck);
    }
    return cache[argToCheck];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  // return str.split('').reverse().join('');
  const result = [];
  function recur(changingStr) {
    const strArr = changingStr.split('');
    const lastLetter = strArr.pop();
    result.push(lastLetter);
    if (strArr.length !== 0) {
      recur(strArr.join(''));
    }
  }
  recur(str);
  return result.join('');
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let result = true;
  const testArr = [];
  function recur(objGiven) {
    Object.keys(objGiven).forEach(key => {
      if (typeof objGiven[key] === 'number' || typeof objGiven[key] === 'string') {
        testArr.push(objGiven[key]);
      }
      if (typeof objGiven[key] === 'object') {
        recur(objGiven[key]);
      }
    });
  }
  recur(obj);
  testArr.reduce((memo, i) => {
    if (memo !== i) {
      result = false;
    }
    return i;
  });
  return result;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // ran out of time to finish this one properly
  const newarr = elements.map(elem => {
    return elem * 1;
  });
  return newarr;
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
