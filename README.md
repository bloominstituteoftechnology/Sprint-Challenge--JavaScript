//Initial Commit 

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

.forEach runs through the array item by item and applies an operation to each item; modifying the original array. Whereas .map does the same but returns a new array with the modifications and leaving the original intact. 

2. What is the difference between a function and a method?

A function is a block of code written to do something. A method is a function that belongs to an object, basically it is inside the curly brackets of that object. 

3. What is closure?

Closure is the concept that a function can access variables inside its curly brackets, but also has access to elements immediately outside of it. That could be global scope or a grandchild function accessing elements in the child function it is nested in. The curly brackets limit where the function can access. Using the grandchild function again, it has access to global scope, elements in the child function, and elements in the grandchild function. However, the child function only has access to global scope and the elements in the parent function. The child function cannot access the elements in the grandchild function because access is only granted in one direction, the furthest nested function out, going in the direction of global scope, not global scope going in. 

4. Describe the four rules of the 'this' keyword.

    * 1. Global binding - which means that the 'this' keyword is set to the window or console object. If you are in strict mode, it goes undefined. We generally don't use global binding (also called window binding).

    * 2. Implicit binding - this clearly states what the keyword refers to. The simple and short explanation is that we look to the left of the dot. It binds it to a function. The more complex answer has to do with when/where we invoke the function and use the 'this' keyword. 

    * 3. Explicit binding - allows us to point to a certain value by using: .call(), .apply(), or .bind(). 

    * 4. Bind - also called New binding allows us to create a new function that is permanently bound to a 'this' value.

5. Why do we need super() in an extended class?

When we use .call(), .apply(), or .bind() they make the connect to the original object and migrate that object's elements to the new object. When we use classes and the extend keyword, it makes the initial connection, but we haven't migrated the elements from the parent class. So, we need super() to help us bring all the elements inside the parent class to the new class. So, when we use class, we need the extend to make the connection and super() to bring over the elements. 

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
