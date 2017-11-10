/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for(let i = 0; i < elements.length; i++){
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  let mappedElements = [];
  for(let i = 0; i < elements.length; i++){
    mappedElements.push(cb(elements[i]));
  }
  return mappedElements;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let currentCalls = 0;
  const callFunc = (...args) => {
    currentCalls++;
    if(currentCalls <= n){
      return cb(...args);
    }
    return null;
  }
  return callFunc;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};
const cacheFunction = (cb) => {
  const cacheObject = {
    cachedArgs: [],
    results: [],
  };
  return (args) => {
    for (let i = 0; i < cacheObject.cachedArgs.length; i++) {
      if (cacheObject.cachedArgs.includes(args)) {
        return cacheObject.results[cacheObject.cachedArgs.indexOf(args)];
      }
    }
    cacheObject.results.push(cb(args));
    cacheObject.cachedArgs.push(args);
    return cacheObject.results[cacheObject.results.length - 1];
  };
};
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  let modifiedStr = str;
  if(modifiedStr === ''){
    return '';
  }
  let lastChar = modifiedStr[modifiedStr.length-1];
  modifiedStr = modifiedStr.slice(0, modifiedStr.length-1);
  return lastChar + reverseStr(modifiedStr);
  //what's the base case? empty str
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  let flag = true;
  let val = undefined;
  const traverseTree = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (typeof key !== 'object' && val === undefined) {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') {
        return traverseTree(tree[key]);
      }
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  traverseTree(obj);
  return flag;
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  let newElements = [];
  for(let i = 0; i < elements.length; i++){
    if(Array.isArray(elements[i])){
      newElements.push(...(flatten(elements[i])));
    } else {
      newElements.push(elements[i]);
    }
  }
  return newElements;
  //what's the base case? hit end of array
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
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
