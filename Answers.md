1. Describe the biggest difference between .forEach & .map.
The biggest difference between .forEach and .map is that forEach doesn't return anything. It calls a function on each element in an array, allowing you to mutate that array. .map does the same thing, but provides you with a new array.	
2. What is the difference between a function and a method?
A method is a function, but a method is a function that is a property inside an object. The difference is in the scope.
3. What is closure?
Closure is a function that has access to the variables in the other scope levels. It's own variables, it's parrent variables, and global variables.
4. Describe the four rules of the 'this' keyword.
Global. When .this is calling on a variable that is in the window or global scope.
Explicit. When .call .apply .bind is used in calling the .this function.
Implicit. When a method and dot notation is used, .this is the object that the method calls upon.
New. When new is used .this will call the function, and add objects to that new function.
5. Why do we need super() in an extended class?
Super() allows us to call the functions on a parent object, and allow the .this keyword to be used. It's like eye of newt. The magic won't work unless you use it. :)
