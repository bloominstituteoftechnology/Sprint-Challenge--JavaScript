# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
Although they both call a function on each item in an array, forEach does not return a value once the function is executed whereas map will return a new array with the adjusted values.

2. What is the difference between a function and a method?
A function is built outside of objects and classes, whereas methods are functions that are used within objects and classes and cannot be called to use outside of their scope.

3. What is closure?
It dictates the scope with which variables and functions defined within it can be accessed.

4. Describe the four rules of the 'this' keyword.
1.Global Object Binding: this will signify the console's Object when used in the global scope.
2.Implicit Binding: when this is used before a function, it refers to the object containing the called function.
3.New binding: then this is used withing a constructor function, it refers to the object that will be created using the constructor
4.Explicit Binding: when the call and apply method are used, this is explicitally defined by the Object the method is used on.

5. Why do we need super() in an extended class?
Super attaches the parent's attributes and methods to the the child class that is being created.
