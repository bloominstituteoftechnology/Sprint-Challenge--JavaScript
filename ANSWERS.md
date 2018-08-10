# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between .forEach & .map.

.forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done.
So whatever you return within that called function is simply discarded.

.map will similarly call the function for each array element but instead of discarding its return value,
 it will capture it and build a new array of those return values.

2. What is the difference between a function and a method?

Method is a function that is a member of an object or class.
Function is stand alone. You can use function without create an objects,
but Method is function inside objects. You should create an object to call method.

3. What is closure?

A closure is the combination of a function and the lexical environment within which that function was declared.
Closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
To use a closure, simply define a function inside another function and expose it.
To expose a function, return it or pass it to another function.
The inner function will have access to the variables in the outer function scope,
even after the outer function has returned.

4. Describe the four rules of the 'this' keyword.

 1.Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
 2.Whenever a function is called by a preceding dot, the object before that dot is this.
 3.Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
 4.Whenever JavaScript’s call or apply method is used, this is explicitly defined.

5. Why do we need super() in an extended class?

 The super keyword is used to access and call functions on an object's parent.
