// TODO: Get checkMatchingLeaves to check nested properties.
// TODO: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/* Completed! WOOOOO. */
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

/* Completed! WOOOOO. */
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

const cacheFunction = cb => {
  const cache = {};
  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* SO CLOSE TO COMPLETION, I CAN TASTE IT ;____; */
/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

// FRANNKKKK. I swapped flattten and checkMatchingLeaves
// so that I could use flatten in checkMatchingLeaves. :D
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

// LOGIC, WHY ;_;
const checkMatchingLeaves = obj => {
  const flattenedArray = flatten(Object.values(obj));

  const leafTest = (arr, i) => {
    while (i < arr.length - 1) {
      if (arr[i] !== arr[++i]) {
        return false;
      }
      return leafTest(arr, i++);
    }
    return true;
  };
  return leafTest(flattenedArray, 0);
};


/* eslint-enable no-unused-vars */

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
