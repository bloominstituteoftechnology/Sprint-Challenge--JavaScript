1. Describe the biggest difference between `.forEach` & `.map`.
.forEach will let you write the entire code for each iteration through an array, similar to what happens when you use a for() loop. On the other hand, .map will create a new array as it iterates through an array, and is primarily used for changing array values.


2. What is the difference between a function and a method?
A function is primarily used for performing a task, and can return a value. Functions can exist anywhere in the code, and can be called from anywhere. Methods are similar to functions, since they can perform tasks, but they are defined inside of an object and can only be called from that object, or other objects that inherit the one it is defined in. Methods also need to be called with a dot notation.


3. What is closure?
A closure is hard to explain. It gives access to modifying a variable, without allowing the variable to be modified from outside. For example, if you are creating a counter function, you want the counter to increase as needed. If you define the count variable as a global variable, anything can modify the count from anywhere in the code. In order to protect it, you need a closure: which can then be called when that variable needs modified.


4. Describe the four rules of the 'this' keyword.
  1. (new binding): `this` can be called from defining a `new` object that calls to a constructor function.
  2. (explicit binding): It can also be called from using .call(), .apply(), and .bind() and is bound to the argument/obj given.
  3. (implicit binding): When used with a dot notation, this is bound to whatever is to the left of the dot.
  4. (default binding): When there is no parent, this will default to the window that the code resides in.


5. Why do we need super() in an extended class?
super() is used to access another class's constructors in order to bind `this` when inheriting from one class to another. If this isn't used, the new class has no way to access the parent class' constructor.