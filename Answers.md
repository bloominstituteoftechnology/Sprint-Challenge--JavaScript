<!-- Describe the biggest difference between .forEach & .map. -->
.forEach executes a function on each array element but .map creats a new array with the results from the function for every element in the array

<!-- What is the difference between a function and a method? -->
a function is a block of code called by name. It can change the given parameters and give a return value. A method is called by name in association with another object. It is only passed onthe object it is attached to.

<!-- What is closure? -->
A closure is a inner function that has access to the outer(enclosing) functions variables by using the scope chain

<!-- Describe the four rules of the 'this' keyword. -->
1: When you use this in the global scope, the "this" value will be the window. It will pull up alot of things you dont want it to pull up.
2: Implicit binding is used when dot notation is used to invoke a function. whatever is left of the dot is it's context 
3: New binding is  used when a constructor function is used. 
4: Explicit binding is when call or apply explicitly defines this

<!-- Why do we need super() in an extended class? -->
it is used to access and call functions from the parent of the object.
