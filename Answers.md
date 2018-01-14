
### Sprint Challenge

1. Map transforms each item in the array and returns a new array of transformed items with the same size of the old array. forEach is useful in just interating over the items in an array and manimpulating the items within the array. forEach iterates over a list and applies some manipulation of the members of that list. map iterates over a list and applies an operation to the members of that list and returns another list of the same size with the transformed values.

2. Five different JavaScript data types are strings, numbers, Boolean, objects and arrays. The special thing about arrays are that the elements within an array don't need to be the same data type and a single array can hold multimple values of different data types.

3. A closure is an inner function that has access to the outer function's variables. The closure has three scope chains: it has access to its own scope (vaiable defined between its curly brackets), it has access to the outer function's varaible and it has access to the global variables.  
Example:
'''javascript
    const limitFunction = (cb, n)
      let callC = 0;
  return (...args) => {
    if (callC === n) return null;
    callC++;
    return cb(...args);
  };
};
'''

4. The four rules of 'this' in JavaScript are:
    1- Whenever a function is contained in the global scope, the value of this inside of that function will be the window object
    2- Whenever a function is called by a preceding dot, the object before that do is this
    3- Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    4- Whenever JavaScript's call or apply method is used, this is explicitly defined.
}