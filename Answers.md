1. Describe some of the differences between `.forEach`(.forEach() returns nothing - It iterates the Array performing a given action for each item in the Array.) & `.map`.map() returns a new Array of objects created by taking some action on the original item. 

2. Name five different Types in JavaScript-- String, Number, Boolean, Arrays, Objects. A Type is something that can represent data. What is so special about Arrays?Array is a composite reference data type. 

3. What is closure? Can you code out a quick example of a closure?  A closure is the combination of a function and the lexical environment within which that function was declared. 

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
return (...args) => {
  const cache = [];
  cache.push(...args);
  if (cache.includes(...args)) {
    for (let i = 0; i < cache.length; i++) {
      if ((cache[i]) === (...arg)) {
        return cb(...args); 
      };
    };

4. Describe the four rules of the 'this' keyword. 1. "This" refers to the global object whether in strict mode or not. 2. Inside a function, the value of "this" depends on how the function is called. 3.In strict mode the value of this remains at whatever it was set to when entering the execution context, so, "this" will default to undefined:  4. When a function is used as a constructor (with the new keyword), its "this" is bound to the new object being constructed.


