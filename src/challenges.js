/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i)
  }
}

const map = (elements, cb) => {
  const newArray = []
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]))
  }
  return newArray
}

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let i = 0
  return (args) => {
    if (i < n) {
      i++
      return cb(args)
    }
    return null
  }
}

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {}
  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input]
    cache[input] = cb(input)
    return cache[input]
  }
}

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === "") {
    return "";
} else {
    return reverseStr(str.substr(1)) + str.charAt(0);
}
};

const checkMatchingLeaves = (obj) => {		  
  // return true if every property on `obj` is the same		    // return true if every property on `obj` is the same
  // otherwise return false		    // otherwise return false
  const leaves = [];
  const findLeaves = (object) => {
    Object.values(object).forEach((value) => {
    if (value === Object(value)) {
    findLeaves(value);
    } else {
      leaves.push(value);
    }
  });
};

const flatten = (elements) => {
  const flattenedArr = []
  each(elements, (item) => {
    if (Array.isArray(item)) flattenedArr.push(...flatten(item))
    else flattenedArr.push(item)
  })
  return flattenedArr
}

console.log(flatten([1, [2], [3, [[4]]]]))


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
