
1. Describe the biggest difference between `.forEach` & `.map`.
x  .forEach() = executes a provided function once for each array element.
x  .map() = creates a new array with the results of calling a provided function on every element in the             calling array.


2. What is the difference between a function and a method?
  x A function is defined outside of an object
  x A method is defined as the property of an object

3. What is closure?
x  A closure gives you access to an outer function's scope from an innner function. closures created every        time a function is created , at function creation time... The inner function will have access to the           variables in the outer function scope, even after the outer function has returned.


4. Describe the four rules of the 'this' keyword.
* 1. Window/Global = When in the global scope, the value of this will be the window/console Object.
* 2. Implicit Binding = whenever a function is called by a preceding dot, the object before the dot is this
* 3. New Binding = Whenever a constructor function is used , this refers to the specific instance of the object that is created and returned by the constructor function 
* 4. Explicit binding = Whenever Javascript's call or apply method is used, this is explicitly defined.


5. Why do we need super() in an extended class?
 * super takes care of the Binding with .call( )