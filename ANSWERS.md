# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    .forEach returns undefined and .map returns a new array.
2. What is the difference between a function and a method?
    A method is a function on an object.
3. What is closure?
    Closure is the ability of a function to access variables outside of it.
4. Describe the four rules of the 'this' keyword.
    Window binding is the default binding of 'this' to the window object (or global object).

    Implicit binding is the binding of 'this' to the object it is on, so when you call a method on a function, the object to the immediate left of the invocation is the object that has 'this' bound to it.  

    Explicit binding is when you bind with .bind, .call, or .apply

   New binding is that whenever you use a constructor, the new object being created has the 'this' binding.

5. Why do we need super() in an extended class?
    We need to use super() in an extended class in order to bind 'this' to the new subclass.
