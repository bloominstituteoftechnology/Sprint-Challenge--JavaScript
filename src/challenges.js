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
  return arg => (arg in cache ? cache[arg] : cache[arg] = cb(arg));
};

/* ======================== Recursion Practice ============================ */
const reverseStr = str => (str ? reverseStr(str.substr(1)) + str[0] : str);

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

const flatten = arr => arr.reduce((a, b) => (Array.isArray(b) ? a.concat(flatten(b)) : a.concat(b)), []);

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
