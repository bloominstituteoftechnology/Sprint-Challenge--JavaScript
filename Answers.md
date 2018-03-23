1. .forEach goes over each array element but doesn't return anything it just uses a function on each element in an array. 
.map returns a new array with the results of the provided function on each element in the array.

2. Boolean, Null, String, Object, Undefined. They act as global level objects and have a ton of useful methods to allow for inventive uses.

3. Closure is an inner function that has access to the functions that enclose it ie outer functions. Here is an example of closure I learned.
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    }
  };
};

4. (1:Window Binding) Whenever a function is in the global scope the value of 'this' will be the window object. (2:Implicit Binding) When a function is called before a dot use this as the object. (3:New Binding) Whenever new is used within a constructor this refers to a new object within the function. (4:Explicit Binding) When Javascript uses call or apply, this is defined explicitly.