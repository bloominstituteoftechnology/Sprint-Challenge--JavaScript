Describe the biggest difference between .forEach & .map.
.foreach consumed the array where as .map creates a new one

What is the difference between a function and a method?
A method is associated with an object. A function is independent of an object.

What is closure?
A closure is an inner function that has access to the outer (enclosing) function's variables

Describe the four rules of the 'this' keyword.
1. The first principle of this involves the global object scope. When just using the keyword this on it's own, it will always assume you mean the global scope of the program/window.
2. The second principle involves using the keyword this in the context of a function within an object. This is called Implicit Binding.
3. When used in the context of a constructer function the this keyword refers to the specific object that is being created by the constructer. This is called the New binding since it is creating something new.
4. When using the call or apply methods it grabs any this keywords that were defined in the called upon object. Allowing you to change what they are set to. This is called Explicit Binding.


Why do we need super() in an extended class?
it is used to access to the this keyword attributes and methods of the object parent
