1- Describe the biggest difference between .forEach & .map.
   .forEach doesn't create a new array and doesn't return anything, but .map returns a new array of the same size. 

2- What is the difference between a function and a method?
  A method is a function that is associated with an object. 
  The only way to access it (invoke it) is to use the dot notation. For example: obj.method()

3- What is closure?
  A closure is an inner function that has access to the outer (enclosing) function's variables

4- Describe the four rules of the 'this' keyword.
   1- window binding: 
      If not binded explicitly, implicitly or with the new keyword, 'this' binding will be to the window object
  2- Implicit Binding:  
      When defining an object, the 'this' keyword binding is to that new object. 
      'this' binding is to the object directly on the left side of the dot notation. 
      For example in obj.doSomething(), any 'this' binding in the method doSomething is to obj
  3- Explicit Binding: 
      When using the functions call(), apply(), or bind(), 'this' binding will be the object passed as an argument to these functions.
  4- new binding: 
      In any object created using the new keyword, 'this' in the constructor or the methods would be for the newly created object.

5- Why do we need super() in an extended class?
  super() runs the parent constructor. 
  If we don't use super(), the child class will not set the properties defined in the parent class. 
  It also gives the child access to all the methods in the parent class. 
