/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], i)) {
      arr.push(elements[i]);
    }
  }
  return arr;
};



const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
};



/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let c = 0;
  return () => {
    c++;
    if (c < n) {
      cb();
    }
  };
};



const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === "") 
    return "";
  
  else
    return reverseStr(str.substr(1)) + str.charAt(0);
  return  result;
}







const checkMatchingLeaves = obj => {

  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = (elements) => {
  const results = [];
  function inner() {
    const elm = elements.shift();
    if (Array.isArray(elm)) {
      elements = elm.concat(elements);
    } else {
      results.push(elm);
    }
    if (elements.length !== 0) {
      inner();
    }
  }
  inner();
  return results;
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
