# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
* While they both iterate over data, Map returns a new array as a result, forEach does not.

2. What is the difference between a function and a method?
* A function operates on explicit parameters, a method operates on implicit objects within a class.  There isn’t a significant difference (to my noob brain).

3. What is closure?
* Name for concept that the function body has access to variables outside of itself, in the global scope.  All functions in JavaScript are closures.

4. Describe the four rules of the 'this' keyword.
* window binding references the global scope, which by default will by the window/console object if not specified further.
* implicit binding applies to object directly to the left of the keyword on the far right.  Important to keep track of what that object is.
* explicit binding uses call, apply, and bind on an invoked function to return specific data points or create a new function to contain them.
* new binding uses a constructor function to create a new object for which 'this' is then bound to.

5. Why do we need super() in an extended class?
* To inherit properties and methods from parent classes so the child has access and can contain only differentiating properties and methods.
