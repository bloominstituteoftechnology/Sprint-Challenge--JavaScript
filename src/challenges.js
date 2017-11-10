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
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  const newFunction = (...args) => {
    count++;
    if (count <= n) {
      return cb(...args);
    }
    return null;
  };
  return newFunction;
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const newFunction = (...args) => {
    const cache = [];
    let exist = false;
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < cache.length; i++) {
        if (cache[j] === args[i]) {
          exist = true;
          return cache[j];
        }
      }
      if (!exist) {
        cache.push(cb(args[i]));
        return cb(args[i]);
      }
    }
  };
  return newFunction;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let flag = true;
  const checkLeaves = tree => {
    Object.keys(tree).forEach(key => {
      if (val === undefined && typeof key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') {
        return checkLeaves(tree[key]);
      }
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return flag;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  const reduce = (item, cb, startingValue) => {
    for (let i = 0; i < elements.length; i++) {
      if (startingValue === undefined) {
        startingValue = elements[0];
        i = 1;
      }
      startingValue = cb(startingValue, elements[i]);
    }
    return startingValue;
  };

  const flattenedArray = reduce(elements,
    (prev, next) => {
      if (Array.isArray(next)) {
        return prev.concat(flatten(next));
      }
      return prev.concat(next);
    },
    [],
    );
  return flattenedArray;
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
