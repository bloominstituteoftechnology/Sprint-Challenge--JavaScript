/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const retArr = [];
  each(elements, (element, i) => {
    retArr[i] = cb(element);
  })
  return retArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = cb => {
  const cacheObj = {};
  return (...args) => {
    const key = args;
    if (!(key in cacheObj)) {
      const cacheVal = cb(...args);
      cacheObj[key] = cacheVal;
      return cacheVal;
    }
    return cacheObj.key;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  if (str.length == 1) return str;
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
};

const checkMatchingLeaves = obj => {
  // recur base case when there are only two properties in Object
  if (Object.values(obj).length === 2) {
    const objValsIndexZero = Object.values(obj)[0];
    const objValsIndexOne = Object.values(obj)[1];
    // check if first and second properties are comparable (index 0 and 1 resp.)
    // comparable is defined here as an object property with
    // 1) no Object nesting and
    // 2) no Array nesting
    // so if an Object's properties is NOT an Object and NOT an array
    // these properties are comparable using ===
    if (!(typeof objValsIndexZero === 'object') && !Array.isArray(objValsIndexZero)) {
      if (!(typeof objValsIndexOne === 'object') && !Array.isArray(objValsIndexOne)) {
        return objValsIndexZero === objValsIndexOne;
      }
      // else the second property is nested (this is at index 1)
      const unNestRightObj = {};
      unNestRightObj[Object.keys(obj)[0]] = objValsIndexZero;
      // only assign the "stepped into" / unNested property to key at index 1
      unNestRightObj[Object.keys(obj)[1]] = Object.values(objValsIndexOne)[0];
      return checkMatchingLeaves(unNestRightObj);
    }
    // else the first property is nested (index 0)
    const unNestLeftObj = {};
    // assign the first key to the "stepped into" / unNested property at index 0
    unNestLeftObj[Object.keys(obj)[0]] = Object.values(objValsIndexZero)[0];
    unNestLeftObj[Object.keys(obj)[1]] = objValsIndexOne;
    return checkMatchingLeaves(unNestLeftObj);
  }
  // else there are more than two properties in Object
  // create key and property Arrays
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  // make two Objects, one for the "left" side in the tree and the other for the "right"
  const objLeft = {};
  const objRight = {};
  // the "left" side will only have the first key and property
  objLeft[objKeys[0]] = objVals[0];
  // the "right" side will have everything else;
  objKeys.slice(1, obj.length).forEach(
    (key, i) => objRight[key] = objVals.slice(1, obj.length)[i]);
  // return if the first and second properties of current Object are equal
  // && allows checkMatchingLeaves to return true only if every property check is true
  // otherwise returns false
  // and then recur call the "right" Object tree
  return objVals[0] === objVals[1] && checkMatchingLeaves(objRight);
};

const flatten = elements => {
  if (!Array.isArray(elements)) {
    return elements;
  }
  if (elements.length === 1) {
    if (!Array.isArray(elements[0])) {
      return elements[0];
    }
    return flatten(elements[0]);
  }
  return [flatten(elements[0])].concat(flatten(elements.slice(1)));
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
