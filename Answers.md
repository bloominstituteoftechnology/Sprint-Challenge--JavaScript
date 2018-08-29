forEach : iterates over an array of objects which can be passed into a single argument function

.map : map will create a new array from a function with new parameters passed into it.

closure : is a function within a function in which the inner function has access to the variables created in the outer function. 

Four rules for "THIS" : 
1. Implicit Binding : Any time the dot notation is used "THIS" will refer to the object to the left of the dot.
 * 2.  Explicit Binding: Any time Call() or Apply() methods are used it will bind THIS to that object
 * 3.  New Binding: A constructor must be created and the "NEW" keyword must be used to create a new instance of the constructor. 
 * 4.  Window Binding : Any time THIS keyword is used in the Global/Window Scope THIS will refer to Global/Window.

 Super: is used in classes to call a parent functions.