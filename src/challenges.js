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
  return (...rest) => {
    if (count >= n) {
      return null;
    } ++count;
    return cb(...rest);
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
  return (...args) => {
    const key = args;
    if (!(key in cache)) {
      const newVal = cb(...args);
      cache[key] = newVal;
      return newVal;
    }
    return cache.key;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
let reversed = '';
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  reversed += str[str.length - 1];
  str = str.slice(0, -1);
  if (str.length > 0) {
    reverseStr(str);
  }
  return reversed.slice(5);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let checkValue;
  let doAllValuesMatch;

  const newArr = Object.values(obj);

  function checker() {
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] === 'object' && checkValue === undefined) {
        checkValue = newArr[i];
        checkMatchingLeaves(newArr[i]);
      } else if (typeof newArr[i] === 'object') {
        checkValue = Object.values(newArr[i]);
        if (checkValue[0] !== newArr[0]) {
          checkMatchingLeaves(newArr[i]);
        }
      } else if (typeof newArr[i] === 'number') {
        checkValue = newArr[0];
        if (newArr[i] === newArr[0]) {
          doAllValuesMatch = true;
        } else {
          doAllValuesMatch = false;
        }
      }
    }
  }
  checker();
  return doAllValuesMatch;

  
};

const myObj = {
  a: 1,
  b: 1,
  c: {
    ca: 1,
    cb: 2,
  },
};
const x = checkMatchingLeaves(myObj);
console.log(x);

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let output = [];
  each(elements, num => {
    if (Array.isArray(num)) {
      output = output.concat(flatten(num));
    } else {
      output.push(num);
    }
  });
  return output;
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
