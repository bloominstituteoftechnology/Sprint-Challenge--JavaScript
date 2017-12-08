/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArr = [];
  each(elements, (item, index) => {
    newArr.push(cb(item, index));
  });
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let counter = 0;
  return (...args) => {
    if (counter === n) return null;
    counter++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  const cache = {};
  return args => {
    if (Object.prototype.hasOwnProperty.call(cache, args)) {
      return cache[args];
    }
    cache[args] = cb[args];
    return cb(args);
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str.length < 2) {
    return str;
  }
  return reverseStr(str.substring(1)) + str.charAt(0);
};

reverseStr('abcd');

const checkMatchingLeaves = obj => {
  let val;
  let matching = true;
  const checkLeaves = tree => {
    Object.keys(tree).forEach(key => {
      if (val === undefined && key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') return checkLeaves(tree[key]);
      if (tree[key] !== val) {
        matching = false;
        return undefined;
      }
    });
  };
  checkLeaves(obj);
  return matching;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const newArr = elements.reduce((current, next) => {
    if (Array.isArray(next)) return current.concat(flatten(next));
    return current.concat(next);
  }, []);
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
