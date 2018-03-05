/* ======================== CallBacks Practice ============================ */
const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

// a) solution using each
const map = (arr, cb) => {
  const output = [];
  each(arr, item => output.push(cb(item)));
  return output;
};

// b) solution using for loop
// const map = (arr, cb) => {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(cb(arr[i]));
//   }
//   return output;
// };

/* ======================== Closure Practice ============================ */
// a) solution using spread/rest syntax and ternary operator
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => (count === n ? null : ++count && cb(...args));
};

// b) solution using spread/rest syntax
// const limitFunctionCallCount = (cb, n) => {
//   let count = 0;
//   return (...args) => {
//     if (count === n) return null;
//     count++;
//     return cb(...args);
//   };
// };

// a) solution using in operator and ternary oprator
const cacheFunction = (cb) => {
  const cache = {};
  return arg => (arg in cache ? cache[arg] : cache[arg] = cb(arg));
};

// b) solution using in operator
// const cacheFunction = (cb) => {
//   const cache = {};
//   return (arg) => {
//     if (arg in cache) return cache[arg];
//     return cache[arg] = cb(arg);
//   };
// };

/* ======================== Recursion Practice ============================ */
// a) solution using substr and ternary operator
const reverseStr = str => (str ? reverseStr(str.substr(1)) + str[0] : str);

// b) solution using substr
// const reverseStr = (str) => {
//   if (str) return reverseStr(str.substr(1)) + str[0];
//   return str;
// };

// a) solution using Object.entries and forEach
const checkMatchingLeaves = (object) => {
  let tmp;
  let match = true;

  const checkLeaves = (obj) => {
    Object.entries(obj).forEach((pair) => {
      const [key, value] = pair;
      if (typeof value === 'object') checkLeaves(value);
      else if (tmp === undefined) tmp = value;
      else if (tmp !== value) match = false;
    });
  };

  checkLeaves(object);
  return match;
};

// b) solution using Object.keys and for loop
// const checkMatchingLeaves = (obj) => {
//   let tmp;
//   let match = true;

//   const checkLeaves = (object) => {
//     const keys = Object.keys(object);

//     for (let i = 0; i < keys.length; i++) {
//       if (typeof object[keys[i]] === 'object') checkLeaves(object[keys[i]]);
//       else if (tmp === undefined) tmp = object[keys[i]];
//       else if (tmp !== object[keys[i]]) match = false;
//     }
//   };

//   checkLeaves(obj);
//   return match;
// };

// a) solution using reduce, spread, ternary operator
const flatten = arr => arr.reduce((a, c) => (Array.isArray(c) ? [...a, ...flatten(c)] : [...a, c]), []);

// b) solution using for loop
// const flatten = (arr) => {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       output = output.concat(flatten(arr[i]));
//     } else {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// };

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
