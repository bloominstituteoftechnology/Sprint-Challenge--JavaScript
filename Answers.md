Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.
  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
Both methods iterate over an array but forEach just performs a function of each element while map returns a new array 
of the same size.

2. What is the difference between a function and a method?
A function is declared in global space while a method is part of an object and 
defined in the objects prototype. The chain extends all the way to the Object members so you will have methods like 
valueOf and toString inherited in the prototype chain.
3. What is closure?
A closure is when a function is define within a function and that function is returned. The internal 
function has access to the outside functions variables as well as global variables. When invoked, the closure allows 
values to be retained(e.g. a counter variable) even when the outside function is completed.
4. Describe the four rules of the 'this' keyword.
a. Windows/Object binding: Functions declared in the global space has this defaulted to the window object.
b. Implicit binding: within the method of an object, this refers to the obj(e.g. left of dot).
c. New binding: this refers the new instances of objects created using constructor functions(e.g. constructors)
d. Explicit binding: this gets assigned (e.g. call, apply) to a specific function
5. Why do we need super() in an extended class?
We need super() to access & call functions on an object's parent. Extends creates the child class, 
but super calls the parent's constructor.

