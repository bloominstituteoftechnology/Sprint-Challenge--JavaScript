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
  const nEle = [];
  each(elements, ele => { nEle.push(cb(ele)); });
  return nEle;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  const x = n;
  return function limitedFunctionCall(...rest) {
    if (n >= x) {
      --n;
      return cb(...rest);
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
  const cache = {};
  return function cachedFunction(...rest) {
    if (!cache[cb]) {
      cache[cb] = { value: cb(...rest), attr: [...rest] };
    }
    if (cache[cb] !== undefined) {
      each(rest, ele => {
        if (cache[cb].attr.indexOf(ele) === -1) {
          cache[cb] = { value: cb(...rest), attr: [...rest] };
        }
      });
    }
    return cache[cb].value;
  };
};

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  let rStr = '';
  const x = n => {
    const m = n.substr([n.length - 1]);
    rStr += m;
    while (n.length > 0) return x(n.substr(0, n.length - 1));
  };
  x(str);
  return rStr;
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let v;
  let f = true;
  const c = o => {
    Object.keys(o).forEach(k => {
      if (v === undefined && typeof k !== 'object') {
        v = o[k];
        return;
      }
      if (typeof o[k] === 'object') return c(o[k]);
      if (o[k] !== v) {
        f = false;
        return;
      }
      return;
    });
  };
  c(obj);
  return f;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let x = [];
  elements.forEach(ele => {
    if (Array.isArray(ele)) {
      x = x.concat(flatten(ele));
    } else {
      x.push(ele);
    }
  });
  return x;
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
