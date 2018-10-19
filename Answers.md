1. Describe the biggest difference between `.forEach` & `.map`. forEach mutates the given array. Map creates a new array.
2. What is the difference between a function and a method? A function is a set of of statements and typically returns a value once called. A method is similar to a function, but it is stored within a first class function.
3. What is closure? a procedure(s) that is contained within a block of code.
4. Describe the four rules of the 'this' keyword.
   a) Global binding, when using "this" in the global scope it will bind point to the window object.

   b) Implicit binding, perhaps to the most common uses of "this". If set on an object, once called that object then becomes "this".

   c) Explicit binding, created when using .call, .apply, or .bind. This automatically generates "this".

   d) New, when used on a constructor, and Object that inherits from that constructor is then "this".

5. Why do we need super() in an extended class?
   It avoids duplicating shared parts with the parent constructor.
