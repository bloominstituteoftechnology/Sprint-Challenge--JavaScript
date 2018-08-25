
1. Describe the biggest difference between `.forEach` & `.map`.
`.foreach` cycles through the array and performs a function
`.map` does the same, but creates a new array holding the returned values from the function

2. What is the difference between a function and a method?
A method is a function that is a part of an object.

3. What is closure?
When a function within a function is used to have access to all the information within the outer function, even after the outer function has stopped running.

4. Describe the four rules of the 'this' keyword.
New - `this` here applies to the object being created
Window - `this` applies to the window when it isn't pointing to anything else.
Implicit - when a `this` keyword is used within a method that is called from an array directly, it is implied that `this` applies to that array
Explicit - using a method such as `call`, `apply`, or `bind`, one can command exactly what `this` points to regardless of anything else

5. Why do we need super() in an extended class?
`super()` tells us what items we are using in the Parent class to create values within the extended one
