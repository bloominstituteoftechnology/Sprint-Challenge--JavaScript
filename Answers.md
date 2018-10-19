#Describe the biggest difference between .forEach & .map.

.forEach() is a method that mimics a for loop. It takes in a callback function that takes in the current item as a parameter. It is used when you want to iterate over arrays. It does not have a return value. .map(), on the other hand, creates a new array. It is used when you want to apply a single operation over every value in an array and return a new array.

#What is the difference between a function and a method?

Methods and functions are fundamentally the same thing. A method is simply a function that lives inside an object.

#What is closure?

Closure is a concept in JavaScript that refers to how variables can be accessed. Closure is like a "backpack" that holds variables. The variables are only held in memory if they are being used. Essentially, closures are how variables are passed down through functions enclosed in other functions. Here is an example of closure:

function test() {

  let a = 0;

  function testAgain() {

    console.log(`Value of a: ${a}`);

  }

  testAgain();

}

#Describe the four rules of the 'this' keyword.

The "this" keyword can point to four different things.

* Window binding - Window binding is the default binding of "this". "This" will always refer to window unless it is implicitly or explicitly bound to something else.
* Implicit binding - Implicit binding is when "this" is implicitly bound to an object. This occurs when you use this inside of a method of an object.
* New binding - New binding occurs when "this" is used in a constructor function to assign properties to a new object.
* Explicit binding - Explicit binding is when you give a reference to a "this" object to a function using .call(), .apply(), or .bind().

#Why do we need super() in an extended class?

Calling super() in the constructor of any child class will call the constructor on its parent class. This way, constructors do not have to be rewritten all the way down the inheritance chain.
