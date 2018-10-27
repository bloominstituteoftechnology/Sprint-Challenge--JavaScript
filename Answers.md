1. Describe the biggest difference between `.forEach` & `.map`.

'.forEach' iterates through an array, much in the same way a for loop would, executes code within its callback, and returns undefined.  Whereas '.map' creates a duplicate of the array, then applies the callback function to each value in this duplicate, and returns the new array.

2. What is the difference between a function and a method?

A method is a type of function that is found as a value on an object.  Whereas 'function' is the general term for a set of instructions or code to be executed when it is invoked.

3. What is closure?

Closure is the term used to describe the phenomenon in which functions can remember the environment in which they were created, which includes variables only contained within that scope.  The logical extension of this is the fact that functions have access to values that may be otherwise inaccessible for reasons related to lexical scoping.

4. Describe the four rules of the 'this' keyword.

-Window/Global - 'this' refers to the window object when not called in any of the other contexts, unless 'use strict' is in effect, in which case it is undefined.

-Implicit binding - 'this' refers to the context/object in which it is being invoked (i.e it refers to 'the value before the dot' when the method is called).

-New binding - When used as part of a constructor function that is called with the 'new' keyword, 'this' refers to the new object that is being created.

-Explicit binding - When used in conjunction with apply/call/bind, 'this' refers to the context/object specified as an argument.

5. Why do we need super() in an extended class?

It passes any new attributes back up to the constructor of the parent object.