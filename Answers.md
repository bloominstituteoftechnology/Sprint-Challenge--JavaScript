// Question 1
The biggest difference between the two is the end result, or the lack of end result one could say. While both can call a provided function on each element in an array, the .forEach method does not actually return anything (undefined). With the .map method, it uses our return values and returns a new array of the original size.

// Question 2
Functions are defined outside of classes, while Methods are defined both inside of and apart of classes. Methods are used almost exclusively in obkect-oriented programming.

// Question 3
This question is a very wide topic depending on the person or article you refer to but I will reference an article from MDN that, perhaps, breaks it down best. "Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created."

// Question 4
* Principle 1 (Window/Global Binding Object Binding): In the global scope, 'this' will be the window/console object.
* Principle 2 (Implicit Binding): Whenever a function is called by a preceding dot, the object before that dot is 'this.' Depending on the object being passed in, we get a different context so when we log out the 'this' keyword we get a different object each time it’s run.
* Principle 3 (New Binding): Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* Principle 4 (Explicit Binding): Whenever JavaScript’s call or apply method is used, 'this' is explicitly defined.

// Question 5
The keyword 'extends' is used to extend an already existing parent object. So 'super' is called within the constructor function to pass any new attributes back up to the constructor of the parent object.