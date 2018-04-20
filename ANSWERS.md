# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

.forEach doesn't return anything, but .map does

2. What is the difference between a function and a method?

A method is a function that is stored as an objects property and can only be called with that object. A function is not neccessarily tied to any objects.

3. What is closure?

A function can access variables outside its local scope, but outer functions can't pull from inside the inner function. i.e. you can pull variables from outside to in, but not from inside to out.

4. Describe the four rules of the 'this' keyword.

1 - without context (global scope) 'this' points to the window
2 - when a method is called with dot notation, 'this' points to whatever precedes the dot (leftmost if multiple dots).
3 - when dealing with constructors, 'this' points to the objected returned by the constructor.
4 -  when using the call or apply method, you are explicitly telling 'this' what to point to

5. Why do we need super() in an extended class?

super() passes a child objects attributes back up to its parent object, creating inheritance.