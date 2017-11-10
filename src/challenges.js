/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  // create a new array
  // send that arg array to each(), which will get the item and index of the arg array
  // then send each of those items and indices to the cb function arg and the result of that should be pushed onto the new array
  // return the resultant array
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 1;
  return (...args) => {
    if (count <= n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const newObj = {};
  return (prop => {
    if (newObj[prop]) {
      return newObj[prop];
    }
    newObj[prop] = cb;
    return newObj[prop](prop);
  });
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  // take a string
  // if we start from the beginning and then use recursion should it .push starting with the last?
  if (str.length === 0) return '';
  return (reverseStr(str.slice(1)) + str[0]);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let testVar;
  let litmus = true;
  const checkLeaves = (treeObj => {
    Object.keys(treeObj).forEach(key => {
      if (testVar === undefined && typeof treeObj[key] !== 'object') {
        testVar = treeObj[key];
        return undefined;
      }
      if (typeof treeObj[key] === 'object') return checkLeaves(treeObj[key]);
      if (testVar !== treeObj[key]) {
        litmus = false;
        return undefined;
      }
      return undefined;
    });
    return undefined;
  });
  checkLeaves(obj);
  return litmus;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const finalArr = [];
  each(elements, item => {
    if (Array.isArray(item)) finalArr.push(...flatten(item));
    else finalArr.push(item);
  });
  return finalArr;
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
