1. .forEach runs the function once for each array elements. .map does the same thing and also generate a new array with the results.

2. Method is object-oriented. Data is implicitly passed to a method, but explicitly passed to a function.

3. Closure is an inner function that has access to the outer function's variable. 

4. Window binding - If no other binding in attached, the value of 'this' is the window.
  Implicit binding - Whenever a function is invoked, 'this' binds to the object before the preceding dot.
  New binding - Used in contructor function 'this' refers to a instance of the object. 
  Explicit binding - The first parameter of .call or .apply method is the binding of 'this'.

5. super() is used to pass any new back to the base class.