1. Describe the biggest difference between .forEach & .map.
The biggest difference is .map has a return value where .forEach does not. Map is creating a new array of the same length as the input array with new values. ForEach is only looping over each value.

2. What is the difference between a function and a method?
The difference between a function and a method is that functions are considered objects while methods are considered values of an object property but they are also functions. A method is usually called using dot notation: obj.myMethod().

3. What is closure?
Closures are functions that remember the free variables that were defined in their parent function.

4. Describe the four rules of the 'this' keyword.
Window binding: Window binding refers to using "this" in the global scope.
Implicit binding: Implicit binding refers to cases in when dot notation is used to call a function. "This" refers to the parent function in which the method being called is a part of.
New binding: New binding refers to cases in which a constructor function is used. When a function is called with "new" it turns the function into a constructor function initializing "this" as an empty object and automatically returning it.
Explicit binding: Explicit binding refers to cases in which "this" gets set explicitly by the developer for said constructor functions. Using .call() and .apply() we can pass in a new reference to "this" as well as arguments.

5. Why do we need super() in an extended class?
Super acts as .call() or .apply(). It is necessary to pass the context into the class that is being extended. Otherwise, the parent class would be called and it would have no variables to instantiate.