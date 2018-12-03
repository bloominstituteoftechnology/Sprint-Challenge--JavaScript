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
  const mappedArray = [];
  for (let i = 0; i < elements.length; i++) {
    mappedArray.push(cb(elements[i]));
  }
  return mappedArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  const cbfunction = (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    if (count === n) {
      return null;
    }
  };
  return cbfunction;
};

/*
const expensiveFunc = () => {
  console.log('Expensive Function called');
  return 'called';
}

const cachedExpensiveCall = cacheFunction(expensiveFunc);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall(true);
cachedExpensiveCall('ABC');
cachedExpensiveCall(true);

This and other tests work as intended, but jest.fn() test does not.

*/
const cacheFunction = cb => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(...args);
    if (cache[key]) {
      return cache[key];
    }
    const val = cb(...args);
    cache[key] = val;
    return val;
  };
};


  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.


/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  const leaves = [];
  const checkLeaves = tree => {
    Object.values(tree).forEach(value => {
      if (value === Object(value)) {
        checkLeaves(value);
      } else {
        leaves.push(value);
      }
    });
  };
  checkLeaves(obj);
  return leaves.every(x => x === leaves[0]);
};

const flatten = elements => {
  const flat = [];
  elements.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  }
);

  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  return flat;
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
