# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

map generates a new array and performs some sort of change as a result


2. What is the difference between a function and a method?
functionally similar however, methods are asscocited with objects and would use this keyword to get at its attributes
 
3. What is closure?
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain.SO any nested
functions have access to the varaibles above them

4. Describe the four rules of the 'this' keyword.

All are dirven by the question what is the calling object
Is the function called by new?
Is the function called by call(), apply(), or bind()?
Is the function called as a method, ie: obj.func()?
Is the function called in the global scope?

If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window.

5. Why do we need super() in an extended class?
to insure that the child inherits from the parent
