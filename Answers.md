1. Describe the biggest difference between .forEach & .map.
   The forEach method executes a provided function once for each element in the array.
   The map method executes a called function on the called array and returns a new array.

2. What is the difference between a function and a method?
   A function is a set of statements that performs a task, calculates a value, or returns an item. A method is a function associated with an object.

3. What is closure?
   Function ran and executed. Function may never run again. However, nested functions will remember references to the variables from the time they were created. Child scope has access to the parent scope.

4. Describe the four rules of the 'this' keyword.

- Implicit Binding - context is implied as the object to the left of the dot
- Explicit Binding - context is referenced using functions/methods such as call, apply, bind
- New Binding - context is the object being instantiated
- Window/Global Object Binding - context not clearly defined (defaults to window object)

5. Why do we need super() in an extended class?
   To give context, assign the 'this' keyword, and pass in arguments to the proper object.
