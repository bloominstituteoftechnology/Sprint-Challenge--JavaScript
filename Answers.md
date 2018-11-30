1. Describe the biggest difference between .forEach & .map.
   1. .forEach is an array method that runs through the entire array like a for loop, but does not return a new array. It’s good for checking certain data within the array.
   2. .map is an array method that runts though the entire array like a for loop, returns a new array, and manipulates the data of the newly created array without altering the original array.
2. What is the difference between a function and a method?
   1. A function is a block of code that can be invoked to execute the code within the function. A function acts as a storage container for code that will not be executed until it is invoked. It’s good for reusability and applying the DRY principle.
   2. A method is a function stored within an object that can only be invoked if you first reference the object.
3. What is closure?
   1. When a nested function accesses a variable in the function's parent, closure over the accessed variable occurs. If a nested function does not use variables from the parent function, closure does not occur. Closure is simply a functions ability to access a parent’s scope.
4. Describe the four rules of the 'this' keyword.
   1. window - if you reference the this keyword without referencing an object, you will access the window’s properties. This is not good practice.
   2. implicit - if you use the this keyword within an object, you reference the object which the this keyword is inside of. It’s a self reference that happens automatically.
   3. explicit - specifically assigning a reference for an object outside of the object’s scope using .call(), . apply(), and .bind()
   4. new - the new keyword creates a new object with reference to a constructor class
5. Why do we need super() in an extended class?
   1. super() references the parent class attributes and methods. Without it, there would be no reference for the new class to connect to and it would error.
