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
  const newArr = [];
  each(elements, (element, index) => {
    newArr.push(cb(element, index));
  });
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let callCount = 0;
  return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  /* let memo = {};

  return (args) => {
    if (memo === args) return memo;
    memo = args;
    return cb(args);
  };
  */
  const cache = {};

  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  /* let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
  */
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = (parentObj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let boolFlag = true;
  let val = 0;
  const checkNode = (obj) => {
    const objKeys = Object.keys(obj);
    objKeys.forEach((objItem) => {
      if (val === 0 && typeof objItem !== 'object') {
        val = obj[objItem];
        return undefined;
      }
      if (typeof obj[objItem] === 'object') {
        return checkNode(obj[objItem]); // recursive function
      }
      if (obj[objItem] !== val) {
        boolFlag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkNode(parentObj); // init function
  return boolFlag;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // const newArr = [];
  let newArr = [];

  /*
  each(elements, (element, index) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });
  */

  each(elements, (element, index) => {
    /* if (Array.isArray(element)) {
      const nestedArray = flatten(element);
      each(nestedArray, (nestedItem) => {
        newArr.push(nestedItem);
      });
    } else {
      newArr.push(element);
    }
    */
    if (Array.isArray(element)) {
      // double comments superior to block comments, double comments Begins
      // const nestedArray = flatten(element);
      /* each(nestedArray, (nestedItem) => {
        newArr.push(nestedItem);
      });
      */
      // newArr = newArr.concat(flatten(element)); // can you re-write this into a spread operator syntax?
      // Double comments ends
      // The is after double comments
      const nestedArray = flatten(element, index);
      newArr = newArr.concat(flatten(element, index));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
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
