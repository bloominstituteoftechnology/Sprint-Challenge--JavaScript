/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

/* My understanding for personal notes
const each = (elements) => {
  elements.forEach((item) =>{
    console.log(item);
  })
};

const arr = [1,2,3];
each(arr);  //prints each element of the array
*/

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

/*  My understanding for personal notes
const map = (elements) => {
  const newArr = elements.map((element) => {
    element += 2;
    return element;
  });
  return newArr;
};

const arr = [1,2,3];
map(arr);  //prints 3,4,5
*/

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  return (...args) => {
    if (n > 0) {
      n--;
      return cb(...args);
    }
    return null;
  };
};

// Full Disclosure/reminder to myself; still attempting to understand, this was more or less taken from the class review

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {}; // cache object in closure scope
  return input => { // similarly to forEach(key), input is a user defined parameter
    if (Object.prototype.hasOwnProperty.call(cache, input)) {
      return cache[input];
    }
    cache[input] = cb(input);
    return cache[input];
  };
};

// Full Disclosure/reminder to myself; still attempting to understand, this was taken exactly from the class review

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

/* Full Disclosure/reminder to myself; still attempting to understand this fully
I believe below represents how this works:
(1) str =' cody'
returns (reverseStr('ody'))
(2) str = 'ody'
returns (reverseStr('dy'))
(3) str = 'dy'
returns (reverseStr('y'))
(4) str = 'y'
returns (reverseStr(''))
(5) str = ''
returns ''
(4a)str = 'y'
returns '' + 'y'
(3a)str = 'dy'
returns 'y' + 'd'
(2a)str = 'ody'
returns 'yd' + 'o'
(1a)str = 'cody'
returns 'ydo' + 'c'
*/


const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  return elements.reduce((explored, toExplore) => {
    return explored.concat(
      Array.isArray(toExplore) ? flatten(toExplore) : toExplore
    );
  }, []);
};

/* Full Disclosure/reminder to myself; still attempting to understand this fully

const array1 = [1, 2, 3, 4];
const total = (currentTotal, currentValue) => currentTotal + currentValue;
console.log(array1.reduce(total, 5)); //prints 15 because of the initial starting value of 5

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);  //prints [a,b,c,d,e,f]

//
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);

(1) a = [] because initial value is [] from arguments
    b = first element, [0,1]
    returns the concatentation of [] and [0,1]
(2) a = [0,1]
    b = [2,3]
    returns the concatenation of [0,1] and [2,3]
(3) a = [0,1,2,3]
    b = [4,5]
    returns the concatatention of [0,1,2,3] and [4,5]
*/
module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
