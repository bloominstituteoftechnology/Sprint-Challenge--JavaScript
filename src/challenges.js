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
  const retArr = [];
  for (let i = 0; i < elements.length; i++) {
    retArr.push(cb(elements[i], i));
  }
  return retArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...arg) => {
    if (count === n) return null;
    count++;
    return cb(...arg);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str.length <= 1) return str;
  return reverseStr(str.substring(1)) + str.charAt(0);
};


// FULL DISCLOSURE - THIS IS NOT MY ORIGINAL WORK AND I DO NOT TAKE CREDIT FOR THE SOLUTION BELOW

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const simplify = (input) => {
    if (Object(input) !== input) return input;
    const keys = Object.keys(input);
    const firstVal = input[keys[0]];
    return Object(firstVal) === firstVal ? simplify(firstVal) : firstVal;
  };
  const keys = Object.keys(obj);
  const firstVal = obj[keys[0]];
  for (let i = 0; i < keys.length; i++) {
    const currentVal = obj[keys[i]];
    if (Object(currentVal) === currentVal && !checkMatchingLeaves(
      currentVal)) return false;
    if (simplify(currentVal) !== simplify(firstVal)) return false;
  }
  return true;
};


const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // Create empty array to return
  // loop over all items in array - if it's an array item, use existing for loop to see if array nested further, else,
  // element item onto array.
  // return the new array

  let newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr = newArr.concat(flatten(elements[i]));
    } else {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

  /* const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let yesArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      yesArr = yesArr.concat(flatten(elements[i]));
    } else {
      yesArr.push(elements[i]);
    }
  }
  return yesArr;
}; */

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};