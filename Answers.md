1. .map() allocates memory and stores return values while .foreach() returns undefined and throws away return values.
2. A method is used as a property to a class and a function is placed outside classes and used as general tools.
3. Closure is a function that has access to the parent scope even if it has already closed.
4. Rule 1: If "this" is used in the global scope it will always reference the window object.
   Rule 2: Whenever an object calls a function through dot notation the preceeding keyword is "this".
   Rule 3: Whenever a constructor function is used, it references "thi"s in regards to the properites of the object being created.
   Rule 4: Whenever JavaScript's call or apply method is used, "this" is explicitly used.
5. super is used when creating an extended class in order for the object to be able to use the "this" keyword.
