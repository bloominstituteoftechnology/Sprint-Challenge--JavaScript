# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

-The major difference between '.forEach' and '.map' is that '.map' returns a new array and '.forEach' doesn't.

2. What is the difference between a function and a method?
-Functions are stand alone pieces of code that can be passed parameters and can optionally return data. All data that is passed to a function is explicitly passed.

-Methods are very similar to Functions in a lot of ways with the major differences being, a method is implicitly passed the object on which it was called, and is able to operate on data that is contained within the class.

3. What is closure?

-Closure is an inner function that has access to the outer function variables—scope chain.

4. Describe the four rules of the 'this' keyword.

-Window/Global Object Binding - When in the global scope, the value of “this” will be the window/console Object.

-Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is "this"

-New binding - Refers to the specific instance of the object that is created and returned by the constructor function

-Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.

5. Why do we need super() in an extended class?

-We use super to access all the call functions on its parents objects.

