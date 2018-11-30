/*
1)
The biggest difference between .forEach and .map is that .forEach does not create a new array like .map does. To further explain .forEach iterates over each item of an array and executes a provided function once over each item of that array and then returns the new executed items back to the original array indexed thus changing the original given array itself. On the other hand, .map still interates over each item of the array and executes a provided function over each item but then it returns the new executed items into a new array thus not changing the original given array while still providing the new executed items for use.

2)
A method is simply a function within an object. A method within a funcation has the same key-value entries like any other property within an object. But with a method the key is the method/function name and the value is the method's/function's return statement or expression. All methods are funcations! And if you think of the window itself as an object then technically all funcations are methods.

3)
Functions are closure! For instance, you can create closure by adding a function within another function. The closure is the fact that the inner(nested) function has access to the other(enclosing) function's variable and parameters. Additionally, that enclosing function has access to the outer object, that being the global window. In turn this creates a scope chain whereby the inner funcation has access to its own scope and everything within its {}, access to its parent funcation and all it's parent's variable and parameters(but not arguments), and access to all the global variables. However, this scoping chain does not work the other way, the global scope cannot access within the function or the function's innfer function.

4) 
The four rules/principles of 'this' are...

Global/Window Binding: 
    In global scope the value of 'this' will be the window/console Object.
Implicit (automatic) Binding:
    When a function is called by a preceeding dot, 
    the value of 'this' will be the object prior to the dot.
New Binding:
    When a constructor fuction is used the value of 'this' will be 
    the specific object that was created by the constructor.
Explicit (forced) Binding:
    When the 'call', 'apply', or 'bind' method is used the value of 'this' will be
    explicitly defined by what the method is calling/applying upon. 
    [ex. const1.function1.call(const2) => this refers to const2]

5)
We need to use super() within an extended class to tell its parent constructor to be aware of the extended class's attributes and vis versa. Super() allows the extended(child) class to be able to access and use the parent's class attributes as its own and tells the parent class that its has an extension class which is allowed to use its properties and methods. After using super() the child can use any parent attribute it desires but can also create its own new attributes that the parent in turn cannot have access to. 

*/