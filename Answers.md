
<!-- 1. Describe the biggest difference between `.forEach` & `.map`. -->

* The biggest difference is map returns a new array of elements while in turn passing each element back to the callback.

<!-- 2. What is the difference between a function and a method? -->

* Method is associated with an object

<!-- 3. What is closure? -->

* Closure is combination of a function and lexical environment within which that function was declared. 

<!-- 4. Describe the four rules of the 'this' keyword. -->

* Window/Global Object Binding: 

When in the global scope, the value of “this” will be the window/console Object;

* Implicit binding:

Whenever a function is called by a preceding dot, the object before that dot is this.

* New binding: 

Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

* Explicit binding: 

Whenever JavaScript’s call or apply method is used, this is explicitly defined.


<!-- 5. Why do we need super() in an extended class? -->

* To access and call functions on an object's parent
