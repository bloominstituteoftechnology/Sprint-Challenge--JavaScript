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
  return (...args) => (count === n ? null : ++count && cb(...args));
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

  const checkLeaves = (o) => {
    Object.keys(o).forEach((k) => {
      if (typeof o[k] === 'object') return checkLeaves(o[k]);
      if (value === undefined) return value = o[k];
      if (o[k] !== value) return flag = false;
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
