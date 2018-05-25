# Assessing your JavaScript Fundamentals
* The objective of this challenge is to get you used to answering a few questions about JavaScript that are commonly asked in interviews. 
* We also have some more reps for you to help hammer in the knowledge you've thus far learned.
* Answers to your written questions will be recorded in *ANSWERS.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe the biggest difference between `.forEach` & `.map`.
.forEach mutates array while .map creates a new one.
2. What is the difference between a function and a method?
a method is a function in an object while a function is not.
3. What is closure?
when a an outer function is called and an inner function has closure over the outermost function so it can access variables regardless of when and where it was called.
4. Describe the four rules of the 'this' keyword.
-- default binding if globally defined
-- implicit depends on where and how the function/method is called.
-- explicit binding forcefully applies the reference of 'this' to the function it calls
-- the 'new' keyword applies 'this' to each instance created with the 'new' keyword.
5. Why do we need super() in an extended class?
-- it magically replaces the need to use call and use object.create to inherit methods from the parent's prototype

## Initializing Project
* Fork/Clone this repository.
* Complete all the exercises as described inside each challenge file.
* Use `console.log()` statements to check to see if your code does what it is supposed to do.
* To test your `console` statements you can run `node /assignments/<fileName>` and see what prints in your terminal. You can also use an online tool like `JSBin`, `REPL.it`, `JSFiddle`, or even your `Chrome developer console`.
* Once you finish the challenges in each file, commit your code, and push it to your fork. 

### Challenge 1: Objects and Arrays
Test your knowledge of objects and arrays. Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

### Challenge 2: Functions
This challenge takes a look at callbacks and closures as well as scope. Use the [functions.js](challenges/functions.js) link to get started.

### Challenge 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge: [prototypes.js](challenges/prototypes.js).

### Challenge 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes: [classes.js](challenges/classes.js).

### Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!
