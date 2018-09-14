Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the Answers.md file and record your responses there.

1. Describe the biggest difference between .forEach & .map.

The biggest difference between the two is that .forEach affects and changes the original array while .map returns a new array which whatever criteria you specified. 

2. What is the difference between a function and a method?

They are the same thing. To clarify between the two however a method refers to a function that has use or scope within an object or a class. The reason a function is also a method outside of an object or class is that it is still part of the global scope/object and therefore is a method itself but it is easier to refer to these as functions not methods. 

3. What is closure?

Closure refers to a function within a function, this function will have access to its own variables and methods and those of its parent function but the parent will not have access to the child's attributes or methods.

4. Describe the four rules of the 'this' keyword.

Window binding
If nothing is bound to *this*, it will try to go to the window or global scope. The default for *this* when nothing is explicitely stated for it. 

Implicit binding
*This* is bound to whatever is to the left of the invocation (the left of the period or dot *.* is what provides the context for *this*).

New Binding
Used to bind *this* to new objects created by Constructor Functions. Binds *this* to the constructor function object. 

Explicit Binding
Explicit binding is when *this* is bound to a function method (using call(), apply() or bind()). You can use a functions *this* scope as the context when you call or apply (to array) it. Bind is used to store a *this* for later use.  

5. Why do we need super() in an extended class?

Super() is needed in an extended class in order to access and use a parent's functions. Without it the children will not have access to a parent's methods. 