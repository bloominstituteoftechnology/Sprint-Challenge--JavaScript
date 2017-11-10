/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) cb(elements[i], i);
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // I'm coming back to this because I don't really get it
  // and I don't want to copy the code I have in my notes
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let callCount = 0;
  return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  // same here, got to come back
  // I only understand closure in the simplest of terms
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
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + str.slice(0, str.length - 1).reverse;
  // this is not right come back and figure out why
  // where does reverse go?
  // i don't think the dot chain is the way I want to go 
  // apparently I don't know anything
  

  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  let val;
  const flag = true;
  const checkLeaves = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (val === undefined && typeOf key !== 'object') {
        val = tree[key];
        return undefined;
      }if (typeOf tree[key] === 'object') return checkLeaves(tree[key]);
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });

  }
  checkLeaves(obj);
  return flag;

  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  if (Array.isArray(elements)) {
  for (let i = 0; i < elements.length; i++) {


  }
  }
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
