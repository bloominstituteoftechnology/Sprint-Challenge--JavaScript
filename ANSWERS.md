# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that .forEach doesn't actually return anything, as in it returns the value undefined but calls a function on each element in the array. Whereas, .map does utilizes return values and actually returns a new value of the same size as the original array that was passed in.

2. What is the difference between a function and a method?
A method is a property of an object that is a function.

3. What is closure?
Closure is when a function can remember and access its lexical scope even when it is being executed outside of that lexical scope.

4. Describe the four rules of the 'this' keyword.
Default binding-when the this keyword is not associated with a containing object, new, or bind/call/apply.  Points to the global object which is window in browsers.

Implicit binding-occurs for methods when a function is a method of an object and references the this keyword the this keyword will point to what's in the object that contains it.

Explicit Binding-the this keyword is passed as an argument to a function called with bind, call or apply that argument may be an object.  

new Binding-when a constructor function is called with new and assigned to a variable, the this keyword points to the object that was passed in as an argument to the constructor function at the time of invocation.  

5. Why do we need super() in an extended class?
Super provides the functionality that call would have for a normal constructor function.  What that means is that it allows an object to access and call functions on it's parent object.