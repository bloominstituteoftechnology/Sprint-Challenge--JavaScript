# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
.map return a new list (array) of the same length, while .forEach doesn't return anything. Essentially, .forEach is an abscracted for loop that operates on each item in a list, map does the same thing but also transforms the list into another list of the same length.

2. What is the difference between a function and a method?
The biggest difference is that methods are simply functions within objects. To call a method, the convention is typically object.method();
3. What is closure?
Closure is bascially a function that returns a function that 'closes' over some local variables. I think of closure scope as 'scopes can see the scopes that contain them'. Closures can create many degrees of locality.

4. Describe the four rules of the 'this' keyword.
-The this keyword always trys to reference to the window object. Outside of any function, the this keyword refers to the window object (global object).
-The this keyword can be implicity bound to whatever is left of of the invocation
-The this keyword can be explicitly bound to one context or another through the use of .call or .apply
-When a function is used as a constructor with the new keyword (to create a new object instance), the this key

5. Why do we need super() in an extended class?
So we can pass props from the parent to the extended class.
