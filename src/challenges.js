/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i =0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]))
  }
  return newArray;
};
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.


/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
let count = 0;
const checker = (...args) => {
  if(++count < n) {
    return cb(...args);
  } else return null;
}
return checker;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = (cb) => {
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
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = (obj) => {
  const arr = [];
  const recurse = (someObj) => {
    const keys = Object.keys(someObj);
    keys.forEach((item) => {
      if (typeof someObj[item] === 'object') {
        recurse(someObj[item]);
      } else {
        arr.push(someObj[item]);
      }
    })
  }
  recurse(obj);
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

const flatten = (elements) => {
  let results = [];
  each(elements, (item) => {
    if (Array.isArray(item)) {
      const nestedArray = flatten(item);
      results = results.concat(nestedArray);
    } else {
      results.push(item);
    }
  });
  return results;
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
