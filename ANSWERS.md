# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

`.forEach` does not edit the array but just loops through it. Also it only returns undefined when finished. On the other hand, `.map` goes through each element and makes a change to every one of them. It returns an array after it finishes.

2. What is the difference between a function and a method?

A function and method are very similar that they run a set of instructions that were given to them. The only difference is that a method is a function that is inside an object. Also the method can use implicit binding when it comes to the `this` keyword instead of Window/Global binding.

3. What is closure?
Closures have access to the variables outside of its scope when it does not have that variable. Usually closures are used when a function returns another function definition and the function definition can be executed later on and plus it has access to the values that returned it.


4. Describe the four rules of the 'this' keyword.

The Window/Global Object binding is when the `this` keyword points to the window object which stores a huge amount of methods and variables. Implicit binding is when the `this` keyword is used inside an object, normally used in a method. New binding is used with a constructor function then making a new instance of that constructor. Very useful when each instance needs to point at its own properties. Explicit binding is used for overriding the context of the `this` keyword.


5. Why do we need super() in an extended class?

`super()` points to the extended class and the attributes of the current class that is extending can make changes to the values of the extended class. It works like `Parent.call(this, childAttributes) and Child.prototype = Object.create(Parent.prototype)` combined.
