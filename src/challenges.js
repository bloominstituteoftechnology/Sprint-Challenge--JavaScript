/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });

  return newArray;
};

/* ======================== Closure Practice ============================ */

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (n === count) {
      return null;
    }
    count++;
    return cb(...args);
  };
};

// -- Fix syntax
const cacheFunction = cb => {
  const cache = {};
  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

// Make beautiful!
const checkMatchingLeaves = obj => {
  const index = 0;
  const objArray = Object.values(obj);

  const testFunction = (arr, i) => {
    while (i < arr.length - 1) {
      if (arr[i] !== arr[++i]) {
        return false;
      }
      return testFunction(arr, i++);
    }
    return true;
  };

  return testFunction(objArray, index);
};

const flatten = elements => {
  let outPut = [];
  each(elements, num => {
    if (Array.isArray(num)) outPut = outPut.concat(flatten(num));
    else {
      outPut.push(num);
    }
  });
  return outPut;
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
