/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  
  for (let i = 0; i < elements.length; i++){
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];

  for (let i = 0; i < elements.length; i++){
    elements[i] *= 2;
    arr.push(elements[i]);
    cb(arr);
  }
  return arr;

};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  let i = 0;
  return (...arg) => {
    if (i < n) {
      i++;
      return cb(...arg);
    }
    return null;
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  let arr = {};
  return (...args) => {
    let n = args[0]; 
    if (n in arr) {
      return arr[n];
    }
    else {
      let result = cb(n);
      arr[n] = result;
      return result;
    }
  }
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!

if (str === "") 
  return "";

else
  return reverseStr(str.substr(1)) + str.charAt(0);

};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  let check = obj[0];

  for(i = 1; i < obj.length; i++){
    if(obj[i] === check) return true;
  }
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  // const results = [];
  // each(elements, (item) => {
  //   if (Array.isArray(item)){
  //     const nestedArray = flatten(item);
  //     each(nestedArray, (nestedItem) => {
  //       results.push(nestedItem);
  //     })
  //   } else {
  //     results.push(item);
  //   }
  // });
  // return results;

  const fltArr = [].concat.apply([], elements);

  return fltArr;

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
