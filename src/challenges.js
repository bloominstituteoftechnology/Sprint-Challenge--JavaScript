/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // elements.map(element => cb(element));
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const mappedValues = [];
  for (let i = 0; i < elements.length; i++) {
    mappedValues.push(cb(elements[i]));
  }
  return mappedValues;
};


/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let nCount = 0;
  return (...args) => {
    if (nCount === n) return null;
    nCount++;
    return cb(...args);
  };
};
const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  // return cached value if it is the same value being called in cb
  //
  // create cached object in outer scope, if argument n is cached, return cached object.
  const myCache = {};
  return n => {
    // if argument n is already in cached object, return value of cached element
    if (n in myCache) {
      return myCache[n];
    }
    // invoke cb once and cache the result. return cached value
    myCache[n] = cb(n);
    return myCache[n];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  let newStr = '';
  for (let i = (str.length - 1); i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flatTree = {};
  let leaf;
  let branch;
  const flattenTree = () => {
    // check each element "leaf", if it is a nested element flatten it
    for (leaf in obj) {
      if (!obj.hasOwnProperty(leaf)) continue;
      if ((typeof obj[leaf]) === 'object') {
        const flatObject = flattenTree(obj[leaf]);
        // for nested elements, rename them with dot format
        for (branch in flatObject) {
          if (!flatObject.hasOwnProperty(branch)) continue;
          flatTree[leaf + '.' + branch] = flatObject[branch];
        }
      } else {
        flatTree[leaf] = obj[leaf];
      }
    }
    // check flattened element properties, return false if differences are found.
    for (var i = 1; i < flatTree.length; i++) {
      if (flatTree[i] !== flatTree[0]) return false;
      return true;
  };
};

//   let tree;
//   let val;
//   let flag = true;
//   const checkLeaves = () => {
//     // retrieve values for each leaf, and compare for same values
//     Object.keys(obj).forEach(key => {
//       if (val === undefined && typeof key !== 'object') {
//         val = obj[key];
//         return true;
//       } if (typeof obj[key] === 'object') return checkLeaves(obj);
//       if (obj[key] !== val) {
//         flag = false;
//         return undefined;
//       }
//       return undefined;
//     });
//   };
//   checkLeaves(obj);
//   return flag;
// };
const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
//   const flattenedArray = reduce(elements, (prev, next) => {
  elements = elements.reduce((a, b) => {
    // bring together elements in each nested array, if an element is an array itself, call function on it.
    if (Array.isArray(b)) return a.concat(flatten(b));
    return a.concat(b);
  }, []);
  // return flattened array
  return elements;
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