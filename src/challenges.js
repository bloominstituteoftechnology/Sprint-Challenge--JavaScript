/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], elements.indexOf(elements[i]));
    }
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
if ( > n) {
  return cb;
}
  cb++;
return 
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  return cb;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order/
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  return str.split('').reverse().join('');
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
 let val;
 let flag = true;
const checkLeaves = (tree) => {
Object.keys(tree).forEach((keys) =>{
  if (value == undefined && typeof key !== 'object'){
    val = tree[key];
    return undefinded;
  }
  if (typeof tree[key] === 'object') {
    return checkLeaves(tree[key]);
  }
  if (typeof tree[key] !== val) {
    flag = false;
    return undefined;
  }
  return undefined;
})
}
checkLeaves(obj);
  return flag;
};

const flatten = elements => {
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
