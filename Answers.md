1.) The biggest difference between .forEach & .map, results in the former altering the array, while the latter returns a new array.

2.) When defining the difference between a function and method, we can take our approach to define such by noticing how they are called. A function is called by name. A method is called by a name that is associated with an object. 

3.) A closure is able to access the outer function's variables as it is an inner function. A closure is associated with three scope chains. A closure can access it's own scope, the outer function's variables, and the global variables. 

4.) Four rules of the 'this' keyword pertain to the following.
    - As a global scope contains a function, the value of this inside of that function will be the window object.
    - To call a function the object is preceded by a dot, before the dot is this. 
    - Using a conctructor function, this refers to the specific instance of the object that is created and returned by the constructor function. 
    - When using call or apply, explicity defined is this. 

5.) Super() is needed in an extedned class to access and call functions on an object's parent. 

