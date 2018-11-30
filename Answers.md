Q: Describe the biggest difference between .forEach & .map.
A: .map method would return a new array with transformed elemnets while .forEach would just perform non transformed processs on each array.

Q: What is the difference between a function and a method?
A: A method is a function within an object.

Q: What is closure?
A: Closures gives you access from outside of its scope to other functions or variables.

Q: Describe the four rules of the 'this' keyword.
A: There are 4 principles of "this" keyword: 
1. Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object
2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is "this". 
3. New binding: Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function. 
4. Explicit binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.

Q: Why do we need super() in an extended class?
A: super() is used to refer to a parent’s constructor "this" keywords/values.