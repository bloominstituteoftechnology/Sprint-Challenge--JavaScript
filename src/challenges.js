/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i <= elements.length - 1; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  for (let i = 0; i <= elements.length - 1; i++) {
    newArray.push(cb(elements[i], i));
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count === n) {
      return null;
    }
    count++;
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
  const cache = [];
  return (...args) => {
    for (let i = 0; i <= (args).length - 1; i++) {
      if (cache.indexOf(args[i]) === -1) {
        cache.push(args[i]);
      } else {
        return cache;
      }
    }
    return cb(...args);
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  let newString = str;

  const delimiter = '_+_';
  const strSplit = newString.split(delimiter);
  const origStr = strSplit[0];
  const outStr = strSplit[1];

  // console.log(str);
  if (outStr !== undefined) {
    if (origStr.length <= outStr.length) {
      return outStr;
    }
    newString += origStr[origStr.length - (outStr.length + 1)];
  } else {
    newString += delimiter;
  }
  return reverseStr(newString);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let value;
  let flag = true;

  const checkLeaves = object => {
    // for (let i = 0; i <= Object.keys(object).length - 1; i++) {
    Object.keys(object).forEach(key => {
      // const key = Object.keys(object);
      const currentItem = object[key];
      if (typeof value === 'undefined' && typeof currentItem !== 'object') {
        value = currentItem;
        return undefined;
      } else if (typeof currentItem !== 'object') {
        if (currentItem !== value) {
          flag = false;
        }
        return undefined;
      } else if (typeof currentItem === 'object') {
        return checkLeaves(currentItem);
      }
    });
    // }
  };
  checkLeaves(obj);
  return flag;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let flattenedArray = [];
  for (let i = 0; i <= elements.length - 1; i++) {
    if (Array.isArray(elements[i]) === true) {
      flattenedArray = flattenedArray.concat(flatten(elements[i]));
    } else {
      flattenedArray.push(elements[i]);
    }
  }
  return flattenedArray;
  /*
  const flattenedArray = [];
  const flattenIt = elementsArray => {
    for (let i = 0; i <= elementsArray.length - 1; i++) {
      const elem = elementsArray[i];
      if (Array.isArray(elem) !== true) {
        flattenedArray.push(elem);
        // return undefined;
      } else if (Array.isArray(elem) === true) {
        return flattenIt(elem);
      }
    }
  };
  flattenIt(elements);
  return flattenedArray;
  */
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
