# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.
<!-- forEach will call the given callback function, passing parameters from the array element for each, but it will not do anything with the return value for each call. Instead, it will perform some operation. Its value is in entirely in its side effects.  -->

<!-- .map, on the other hand, applies the callback to the passed values from each array element, and then appends the function return value to a new array. After .map has finished interating, it returns the new array. It can be useful without any side effects whatsoever. -->
<!-- ----------------------------------------------------------- -->
2. What is the difference between a function and a method?
<!-- A function is a callable object within a lexical scope. A method is just a function that is accessed by a reference from an Object property key. In fact, the same function could be accessed both by a call within a lexical scope, or a method call on an object key. An important difference for a method though, is that the function will have its **this** property set to the object whose key is being used to call it. This is called implicit binding, and gives additional flexibility and contextual information to the method call that the equivalent function would not have in absence of explicit or new binding. -->
<!-- ----------------------------------------------------------- -->
3. What is closure?
<!-- Closure is the set of variables that a function has access to at runtime outside of its local variables and parameters, through its lexical scope (aka nested scope). If a function persists in memory, it will continue to have access to its closure at time of its declaration.  -->
<!-- ------------------------------------------------------------ -->
4. Describe the four rules of the 'this' keyword.
<!-- 1. The Default Binding will be the global object. It will be the this keyword unless one of the bindings below is in effect.
    2. The implicit binding will be in effect when a function is called via an Object Key. This will be based on the immediate object whose key is being accessed (i.e., the first object to the left of the key for the method. This binding is overriden by the explicit binding or the new binding.
    3. The explicit binding will be in effect if a function is called using its call, apply, or bind methods. All of these methods take a this argument as their first parameter, with the function's normal parameters defined afterwards. Call and apply will immediately call the function with **this** bound to whatever object was passed as a first parameter. The bind function will return a value of the original function that differs in its **this** being hard bound to the Object originally passed to bind as its first argument.
    4. The new binding. When a constructor function is called with new preceeding it, **this** will be set to the new object automatically created by the new call on the function -->

5. Why do we need super() in an extended class?
<!-- The super passes the arguments that are required for the "super class," in order for the object to have the same properties defined as its "super class". -->

## Project Set up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add TL as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [X] You are now ready to build this project with your preferred IDE
- [X] Implement the project on your Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
