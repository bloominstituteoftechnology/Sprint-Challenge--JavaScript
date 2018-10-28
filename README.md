# Assessing your JavaScript Fundamentals
This sprint you worked really hard on learning the fundamentals of JavaScript! This sprint challenge will touch on each concept covered throughout this week.  Follow each task in order but feel free to skip something if you're struggling and come back to it later.

* This project is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content.

## Task 1: Set Up The Project With Git

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] You are now ready to build this project with your preferred IDE

## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between .forEach & .map.

.forEach iterates over a list of data and in turn passes back an item and an index to us for use but .forEach doesn’t return us anything like .map does. The biggest difference between .forEach and .map is that map returns a new array of elements while in turn passing each element back to the callback.

2. What is the difference between a function and a method?

A function is a piece of code that is called by name. It can be passed data to operate on (the parameters) and can optionally return data. All data that is passed to a function is explicitly passed through variables.

A method is similar but is called by a name that is associated with an object. There are two main differences. A method is implicitly passed the object on which it was called. A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).

3. What is closure?

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. A closure is a way to access and manipulate external variables from within a function.

4. Describe the four rules of the 'this' keyword.

* 1. Principle 1: Window/Global Object Binding 
*
*    In the [global scope], the value of “this” is the [window] or [undefined].
*    Is the function called in the global scope?
*         - If strict mode is enabled, return undefined.
*         - Otherwise, return the global object, ie: window.
*
* 2. Principle 2: Implicit Binding
*
*    A function is called by a preceding dot, the object bto the left of the dot is "this."
*
* 3. Principle 3: New binding
*
*    Relevant with constructor functions, "this" refers to the specific instance of the 
*    object that is created (parameter) and returned by the constructor function.
*
* 4. Principle 4: Explicit binding 
*
*    Whenever JavaScript’s .call .apply or .bind allow us to explicitly state what the 'this' 
*    keyword will be in any given fucntion:

5. Why do we need super() in an extended class?

The super keyword is used to access and call functions on an object's parent.

#### Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.

## Task 3: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 4: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 5: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 6: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

**Congratulations, you completed the sprint challenge!**
