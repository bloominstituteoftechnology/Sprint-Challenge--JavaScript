/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  return elements;
};

const map = (elements, cb) => {
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
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
  const cache = {};
  return (...args) => {
    const checker = args;
    if (checker in cache) {
      return cache.checker;
    }
    cache[checker] = cb(checker);
    return cache[checker];
  }
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  let test;
  let flagger = true;
  const leafCheck = object => {
    Object.keys(object).forEach(element => {
      if (test === undefined && typeof element !== 'object') {
        test = object[element];
      }
      if (typeof object[element] === 'object') {
        return leafCheck(object[element]);
      }
      if (object[element] !== test) {
        flagger = false;
      }
    });
  };
  leafCheck(obj);
  return flagger;
};

const flatten = elements => {
  let flatArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArr = flatArr.concat(flatten(elements[i]));
    } else {
      flatArr.push(elements[i]);
    }
  }
  return flatArr;
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
