# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
   - `.forEach` does not return any value of the array it is iterating over, while `.map` returns a new array with converted values  from the array it is iterating through.
2. What is the difference between a function and a method?
   - A method is a function that is contained inside an Object as a property, while a function has either global or local scope without it being a property of an Object.
3. What is closure?
   - Closure is the combination of a function and the lexical environment within which the function was declared. This means functions are able to access variables declared in their scope chain—the enclosing function's variables or global variables or both, but not backwards.
4. Describe the four rules of the 'this' keyword.
   1. Default window - the `this` keyword references the Window Object by default.
   2. Implicit Binding - when a method is called, the `this` keyword will reference the Object closest to the method call—meaning the Object on the left side of the `.` that separates the Object and the method's name.
   3. New Binding - when creating a new Object using a constructor function, the keyword `new` will assign a new `this` reference to the Object it is creating.
   4. Explicit Binding - the `this` keyword is assigned to a specific Object using the `.call(), .apply(), or .bind()` methods. 
5. Why do we need super() in an extended class?
   1. `super()` is required in order for the Object to access its parent Object's functions.
