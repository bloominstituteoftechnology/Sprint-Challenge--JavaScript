Describe the biggest difference between .forEach & .map.
    What they have in common is that both call a provided callback function on each item of the passed array once.
    The major difference between them is that .map creates a new array from the results while .forEach does not. 

What is the difference between a function and a method?

    Both function and methods are a set of instructions that have certain scope/closure.
    A function becomes a method when is create inside of an object. A function can be called from any scope its closure allows. A method can only be invoked through the object's name in which it exists.

What is closure?
    Closure of a variable or function in JS refers to the abily of accessing an outer function's scope from an inner functions or the restricted access to an inner function from an outside fuction. It does not work both ways. You cannot access an inner function from an outside fuction.

Describe the four rules of the 'this' keyword.

1. Window Binding:
    The window object is the object that by default the keyword 'this' points to if no other binding has been assigned
* 2. Implicit Binding:
    Occurs in object methods and the 'this' keyword refers to itself, so to its own methods defined inside the object itself.
* 3.  New Binding
    The this keyword is bound to the new keyword and a constructor. So eveytime that a constructor is instantiated with the new keyword, a this{} object is created inside the constructor and allows to access the variables inside the constructor. In this way, we can construct an object.
* 4. Explicit Binding
    In this case, the this keyword is explicitly defined when using call, apply or bind. These functions are used when parent'constructor attributes want to be inherit.

Why do we need super() in an extended class?
    super() is the equivalent of Parent.call(this, attributes) in prototype inheritance. We use it when we want out child object to inherit the parent's constructor attributes that will help us build an object.