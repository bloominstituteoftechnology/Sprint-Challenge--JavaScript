/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  elements.forEach((...args) => {
    cb(...args);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return elements.map(cb);
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let callCount = 0;
  return (...args) => {
    if (callCount === n) {
      return null;
    }
    callCount++;
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
  return n => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = cb(n);
    return cache[n];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const strArray = str.split('');
  let callCount = str.length;
  const returnArr = [];

  const reverseStep = () => {
    if (callCount > 0) {
      returnArr[strArray.length - callCount] = strArray[callCount - 1];
      callCount--;
      reverseStep();
    } else {
      return returnArr;
    }
  };
  reverseStep();
  return returnArr.join('');
};


const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const combineObj = (...params) => {
    let newArr = [];
    Object.values(...params).forEach(objectValue => {
      if (typeof objectValue === 'object' && objectValue !== null) {
        newArr = newArr.concat(combineObj(objectValue));
        return;
      }
      newArr.push(objectValue);
    });
    return newArr;
  };

  const objectToArray = combineObj(obj);
  const returnVal = objectToArray.filter(
    testValue => objectToArray[0] !== testValue,
  );

  return returnVal.length === 0;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  const returnArr = elements.reduce((previousItem, nextItem) => {
    if (Array.isArray(nextItem)) {
      return previousItem.concat(flatten(nextItem));
    }
    return previousItem.concat(nextItem);
  },
    [],
  );
  return returnArr;
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
