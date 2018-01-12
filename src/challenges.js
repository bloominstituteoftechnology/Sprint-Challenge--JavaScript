/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr[i] = cb(elements[i], i);
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let timesInvoked = 0;
  return (...args) => {
    if (timesInvoked < n) {
      timesInvoked++;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = cb => {
  const cache = {};
  return (...args) => {
    if (Object.prototype.hasOwnProperty.call(cache, args)) return cache[args];
    cache[args] = cb(args);
    return cache[args];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  return str.length < 2 ? str : reverseStr(str.slice(1)).concat(str[0]);
};

const checkMatchingLeaves = obj => {
  const simplify = input => {
    if (Object(input) !== input) return input;
    const keys = Object.keys(input);
    const firstVal = input[keys[0]];
    return (Object(firstVal) === firstVal) ? simplify(firstVal) : firstVal;
  };
  const keys = Object.keys(obj);
  const firstVal = obj[keys[0]];
  for (let i = 0; i < keys.length; i++) {
    const currentVal = obj[keys[i]];
    if (Object(currentVal) === currentVal && !checkMatchingLeaves(currentVal)) return false;
    if (simplify(currentVal) !== simplify(firstVal)) return false;
  }
  return true;
};

const flatten = elements => {
  let newArr = [];
  elements.forEach(el => {
    if (Array.isArray(el)) {
      newArr = newArr.concat(flatten(el));
    } else {
      newArr.push(el);
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
