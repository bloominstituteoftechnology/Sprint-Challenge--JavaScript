/* ======================== CallBacks Practice ============================ */
const each = (ele, cb) => {
  // Iterates over a list of ele, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < ele.length; i++) {
    cb(ele[i], i)
  }
}

const map = (ele, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = []
  for (let i = 0; i < ele.length; i++) {
    newArray.push(cb(ele[i]))
  }
  return newArray
}

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0

  return (...arg) => {
    if (count === n) return null
    count++
    return cb(...arg)
  }
}

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {}

  return (args) => {
    if (args in cache) return cache[args]
    cache[args] = cb(args)
    return cache[args]
  }
}

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (!str) return '' // false if str is empty
  return reverseStr(str.substr(1)) + str.charAt(0)
}

function checkMatchingLeaves (obj) {
  // initiate return flag and comparison val
  let flag = true
  let val = 0

  // create an array of the obj values
  const valueArr = Object.values(obj)

  // Find a non-object value in the values array
  // Set val to the found element value
  valueArr.forEach((el) => {
    if (val === 0 && typeof el !== 'object') {
      val = el
      return undefined
    }
  })

  // Define recursive function
  function checkLeaves (ob) {
    const arrValues = Object.values(ob)

    for (let i = 0; i < arrValues.length; i++) {
      // if value is an object, dig into object to find
      // non-object values
      if (typeof arrValues[i] === 'object') {
        checkLeaves(arrValues[i])
        // if value is not object, compare to val
        // if current value != val switch flag to false
      } else if (arrValues[i] !== val) {
        flag = false
      }
    }
  }
  // Call to recursion function
  checkLeaves(obj)
  return flag
}

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArr = []

  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr = newArr.concat(flatten(elements[i]))
    } else {
      newArr.push(elements[i])
    }
  }

  return newArr
}

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten
}
