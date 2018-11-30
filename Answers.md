1. Describe the biggest difference between .forEach & .map.
* Both are higher order functions which receive a callback function as their perameter
* .forEach() enacts a function on each element of an array, whereas .map returns a new array
2. What is the difference between a function and a method?
* A method is a function attached to an object, and it cannot be invoked without first referencing its parent object. A function can be called at any time.
3. What is closure?
* A function within a function can access the outer function's variables.
4. Describe the four rules of the 'this' keyword.
* 'this' can reference the window or console's object. (For example: it can reveal the methods on Console, such as .log)
* When a method is called, 'this' refers to the object to the left of the .
* When using a constructor method, 'this' refers to the specific objects being created
* When creating a new constructor, 'this' can be used within .call() or .apply() to borrow attributes of the original
5. Why do we need super() in an extended class?
* super() brings all of the attributes and methods from the parent class onto the child class
