/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  const elements = [];
  for (let i = 0; i < elements.length; i++);
  elements.each(function(n));
  cb(n);
}

  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const elements = [1,2,3,4,5,6,7,8];
  for (let i = 0; i < elements.legth; i++)
    map.push(cb(elements[])); 
  }
  return elements;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  const count = 0; 
  if (count < n ){
    cb();
    count++;
  }
  return limitFunctionCallCount;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
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
};

const checkMatchingLeaves = obj => {

  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  const newElements = []
    for (let i = 0; i < arr.length; i++){
       if (elements[i] === Array) {
         newElements = flatten(elements[i])
       }
       else {
         newElements.push(elements[i]); 
       }
    }
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
