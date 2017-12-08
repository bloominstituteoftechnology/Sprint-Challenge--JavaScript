/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};
const map = (elements, cb) => {
  const myArr = [];
  each(elements, item => myArr.push(cb(item)));
  return myArr;
};
/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let limitCount = 0;
  return (...args) => {
    if (n === limitCount) return null;
    limitCount++;
    return cb(...args);
  };
};
const cacheFunction = cb => {
  const cacheFunc = {};
  return i => {
    if (Object.prototype.hasOwnProperty.call(cacheFunc, i)) {
      return cacheFunc[i];
    }
    cacheFunc[i] = cb(i);
    return cacheFunc[i];
  };
};
/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  return str
    .split('')
    .reverse()
    .join('');
};

const checkMatchingLeaves = obj => {
  let val;
  let checkLeaf = true;
  const testLeaf = object => {
    Object.keys(object).forEach(key => {
      if (val === undefined && key instanceof Object !== true) {
        val = object[key];
        return undefined;
      }
      if (object[key] instanceof Object === true) return testLeaf(object[key]);
      if (object[key] !== val) {
        checkLeaf = false;
        return undefined;
      }
      return undefined;
    });
  };
  testLeaf(obj);
  return checkLeaf;
};

const flatten = elements => {
  let makeFlat = [];
  each(elements, i => {
    if (Array.isArray(i)) {
      makeFlat = makeFlat.concat(flatten(i));
    } else {
      makeFlat.push(i);
    }
  });
  return makeFlat;
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
