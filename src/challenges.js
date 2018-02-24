/* ======================== CallBacks Practice ============================ */
const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

const map = (arr, cb) => {
  const output = [];
  each(arr, item => output.push(cb(item)));
  return output;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count === n) return null;
    count++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  const cache = {};
  return (arg) => {
    if (arg in cache) return cache[arg];
    return cache[arg] = cb(arg);
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  if (str.length === 0) return '';
  return reverseStr(str.substr(1, str.length)) + str[0];
};

const checkMatchingLeaves = (obj) => {
  let value;
  let flag = true;

  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof object[key] !== 'object') return value = object[key];
      if (typeof object[key] === 'object') return checkLeaves(object[key]);
      if (object[key] !== value) return flag = false;
      return;
    });
  };
  checkLeaves(obj);
  return flag;
};


const flatten = arr => arr.reduce((a, b) => {
  if (Array.isArray(b)) return a.concat(flatten(b));
  return a.concat(b);
}, []);

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
