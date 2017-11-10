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
    return cb();
  };
};
const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  // const cache = {};
  // // return cached value if it is the same value being called in cb
  // return () => {
  //   for (let i = 0; i < cache.length; i++) {
  //     if (cb === cache[i]) {
  //       return cache[i];
  //     }
  //     // if the object isn't cached, cache it and return it.
  //     const result = cb;
  //     cache.push(cb);
  //     return result;
  //   }
  // };
  const cache = {};
  return () => {
    const args = Array.prototype.slice.call(arguments);
    if (cb) {
      args.sort();
    }
    if (cache[args] !== undefined) {
      return cache[args];
    }
    const result = cb.apply(this, args);
    cache.push(result);
    return result;
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
  let tree;
  let val;
  let flag = true;
  const checkLeaves = () => {
    Object.keys(tree).forEach(leaf => {
      if (val === undefined && typeof leaf !== 'object') {
        val = tree[leaf];
        return undefined;
      }
      if (typeof tree[leaf] === 'object') return checkLeaves(tree[leaf]);
      if (tree[leaf] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return flag;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattenedArray = this.reduce(elements, (prev, next) => {
    if (Array.isArray(next)) return prev.concat(flatten(next));
    return prev.concat(next);
  }, []);
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
