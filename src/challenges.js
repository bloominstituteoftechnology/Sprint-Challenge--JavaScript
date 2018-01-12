/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {/*initiate for loop */
    cb(elements[i]);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.


  const map = (elements, cb) => {
    let newArr = [];
    for (let i = 0; i < elements.length; i++)
      newArr.push(cb(elements));
  };
  return newArr;

  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  /* ======================== Closure Practice ============================ */
  const limitFunctionCallCount = (cb, n) => {
    let times = 0;
    return (...args) => {
      times++;
      if (times <= n) {
        return cb();
      }
      // Should return a function that invokes `cb`.
      // The returned function should only allow `cb` to be invoked `n` times.
    };

    const cacheFunction = cb => {
      return (input) => {
        if (Object.prototype.hasOwnProperty.call(cache, input)) {
          return cache[input];
        }
        cache[input] = cb(input);
        return cache[input];
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

        if (!str.length) {
          return '';
        } else {
          return str.split('').reverse().join('');
        }
        // reverse str takes in a string and returns that string in reversed order
        // The only difference between the way you've solved this before and now is that you need to do it recursivley!
      };

      // return true if every property on `obj` is the same
      // otherwise return false
      const checkMatchingLeaves = obj => {
        let check = 0;




      };

      const flatten = elements => {
        for (let i = 0; i < elements.length; i++) {
          elements = elements.reduce((flat, arr) => flat.concat(arr), []);
        } return elements;
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