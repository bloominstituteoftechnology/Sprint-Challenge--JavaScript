# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

> You have three hours to complete this challenge. Plan your time accordingly.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

Both .forEach and .map are array methods that accept a callback to execute a set of instructions on each array element. 

.map on an array returns a new array with the result of the callback function for each element of the original array. 

.foreach also covers the callback function for each element of the array, but it does not return a new array like .map does. 

2. Explain the difference between a callback and a higher order function.

A higher order functions take another function as argument. Callback is a function that is passed to another function for it to be invoked inside of it. 

A higher order function receives a function as argument. Callback functions are passed as arguments to other functions. 

3. What is closure?

Closure is the combination of a function bundled together(enclosed) with references to its surrounding state. Closures are created everytime a function is created, at function creation time. 

4. Describe the four rules of the 'this' keyword.

1)Global Scope binding: when 'this' is used outside of any specific object.

2)New binding: when 'new' is used with constructors to build new objects.

3)Explicit binding: when using apply and call where we chose some object for some fucntion to copy parent's property.  

4)Implicit binding: when 'this' is used with a specific declared object.

5. Why do we need super() in an extended class?

When creating a child class of a parent class. It is for the child class to access the methods and properties of the parent class for the child class to access the functions of the parent class. 

### Task 1 - Project Set up

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the vnext branch, NOT master!

- [X] Create a forked copy of this project. 
- [X] Add TL as collaborator on Github. 
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`. 
- [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project. 
- [X] You are now ready to build this project with your preferred IDE
- [X] Implement the project on your Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.



### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [X] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure DONE

This challenge takes a look at closures as well as scope. 
* [X] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [X] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [X] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [X] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.
