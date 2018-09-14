
1. Describe the biggest difference between `.forEach` & `.map`.

.forEach loops through an array all the way without stopping unlike a for loop where you can return it at some point.
.forEach executes a provided function on each iteration. 
In .map you are able to loop through an array in addition to modifying each iteration and returning an array of the same size.
So forEach is able to change the original array, whereas .map is able to make a new array from the original.

2. What is the difference between a function and a method?
functions are defined outside of objects, whereas methods are defined inside of objects like in our sprint challenge today.


3. What is closure?

Closure occurs when there is a function, and there is a nested function inside of that.
It is like having multiple one way mirrors surrounding the blocks of code. The function from the inside has access to 3 scope chains. Function, outer-function, and global.

4. Describe the four rules of the 'this' keyword.
There is window binding:
window binding occurs when the function that is being called is contained within the global scope and the "this" keyword is inside of that function. Using this outside of an object.

Implicit Binding:
Using object literals.

Whenever a function is called by a preceding dot, the object before that dot is this.
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
Whenever JavaScript’s call or apply method is used, this is explicitly defined.

New Binding: constructor functions and classes

Explicit Binding: function methods

5. Why do we need super() in an extended class?

We need super because it inherits the properties in the parent class. Whereas extends is it brings in the properties from the parent.