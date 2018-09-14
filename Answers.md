1. Describe the biggest difference between `.forEach` & `.map`.
forEach will apply the callback function to current array, so the value of current array will be changed.  map will apply the callback function to another array so the current array won't be changed.

2. What is the difference between a function and a method?
function can be called anywhere.  method is belong to an object and only that object can use method.

3. What is closure?
when a function is created inside of a function, the nested function have access to outside function's variable.  The nested function's scope includes the outside function

4. Describe the four rules of the 'this' keyword.
- global binding
- implicit binding - left of dot
- new binding - when a new object is created by constructor function
- Explicit binding - when call, apply methods are used

5. Why do we need super() in an extended class?
to use the variables declared in the extended class
