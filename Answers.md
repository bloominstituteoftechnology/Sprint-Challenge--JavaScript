1) Describe the biggest difference between .forEach & .map.

  ForEach executes a function only once on each element in the array.

  Map makes a new array that calls a function on evry element in the array.

2) What is the difference between a function and a method?

  THey are both functions except a method is a function used as a property inside an object. A function is code we right to make sonething do something.

3) What is closure?

  CLosure is a chain of functions in which the inner function has access to the outer enclosing function's variables.

4) Describe the four rules of the 'this' keyword.

  Window Binding - If no other binding is attached, the window is what is used for "this". The scope is global.

  Implicit Binding - When a function is called by a dot infront of it, the object before that dot is "this". The scope is lexical.

  New Binding - When a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.

  Explicit Binding - When ".call" or ".apply" method is used, this is explicitly defined.


5) Why do we need super() in an extended class?

  Super() is what binds properties from another object into the object it is placed in so that that object can inherit the properties of the function it is being bound with.
