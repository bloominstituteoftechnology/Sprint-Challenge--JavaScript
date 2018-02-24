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
  let count = 0;
  const limitedCall = (...arg) => {
    if (count === n) return null;
    count++;
    return cb(...arg);
  };
  return limitedCall;
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  const checkCache = (...arg) => {
    if (arg in cache) return cache[arg];
    const memo = cb(arg);
    cache[arg] = memo;
    return memo;
  };
  return checkCache;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const newStr = [];
  const strLen = str.length;
  let curChar = strLen - 1;
  const recursiveReverse = () => {
    if (newStr.length === strLen) return newStr.join('');
    newStr.push(str[curChar]);
    curChar--;
    return recursiveReverse();
  };
  return recursiveReverse();
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  bool = true;
  let lastValue;
  objectLength = Object.values(obj);
  objectKeys = Object.keys(obj);
  for(let i = 0; i < objectKeys; i++) {
    if (typeof(obj[objectKeys[i]]) === "object") checkMatchingLeaves(obj[objectKeys[i]]);
    else if (typeof(obj[objectKeys[i]]) === "undefined")
    //if(Object.prototype.toString.call(objectKeys[i]) === "Object")
  }

  //return bool;
  //return Object.prototype.toString.call(obj[objectKeys[0]]);
  return typeof(obj[objectKeys[3]]) === "object";
};

const tree1 = {
        x: 1,
        y: 1,
        z: 1,
        xa: {
          xx: 1,
          xy: 1,
          xz: 1,
          zz: {
            a: {
              b: {
                z: 1,
              },
            },
          },
        },
      };
const tree2 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 2,
        },
      },
    },
  },
  r: 1,
};

console.log(checkMatchingLeaves(tree1));
console.log(checkMatchingLeaves(tree2));

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArr = [];
  for (let i = 0; i < elements.length; i++) {
    // flattens out the array at element[i] by going deeper until it doesnt hit an array anymore
    if (Array.isArray(elements[i])) newArr = newArr.concat(flatten(elements[i]));
    // must use concat ^; because it grabs all the elements and adds them,
    //   while .push will add the actual array that contains the elements
    else {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten
};
