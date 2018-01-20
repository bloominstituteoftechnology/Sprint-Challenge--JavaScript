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
  const mappedArray = [];
  for (let i = 0; i < elements.length; i++) {
    mappedArray.push(cb(elements[i]));
  }
  return mappedArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = n;  // start at the maximum number and count down
  return (...args) => {  // rest operator for all future arugments. when i call limitFunctionCallCount
    // it's going to need to be assigned a variable. then i can pass in whatever/however many args i wanted

    if (count > 0) {
      --count;
      return cb(...args);  // spread operator basically return the whole list of all the arguments
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

  return (...stuff) => {
    const cache = {};
    const keys = Object.keys(cache);
    const toString = keys.toString();
    if (keys.indexOf(toString) !== -1) {
      return cache[toString];
    }
    const result = cb(...stuff);
    cache[toString] = result;
    return result;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!

  const reverse = '';
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const keys = Object.keys(obj); // have an array of all keys now

  for (let i = 1; i < keys.length; i++) {
    let firstElement = keys[0];    // iterate over all the keys.
    const firstTime = keys.indexOf(keys[i]);   // first time that element can be found.
    // i need to check against each element
    if (firstElement === firstTime) {    // not sure what i was doing here...i'm trying to check that the first key equals the next
      firstElement = keys[i++];
      return true;
    }
  }
  return false;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {  // checks if that element is an array....
      newArray = newArray.concat(flatten(elements[i]));  // concat creates 1 array out of 2, flatten will do the rest
    } else {
      newArray.push(elements[i]);
    }
  }
  return newArray;
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
