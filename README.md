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

A: .forEach is sort of like a for loop in that it iterates through every item in an array and does something to the original array whereas .map leave the original array alone while creating a new array with something done to the data from the original array before returning it.

2. Explain the difference between a callback and a higher order function.

A: A callback is a function which is passed into a higher order function as a parameter whereas a higher order function is a function which takes a callback as a parameter.

3. What is closure?

A: A synonym for hell on earth...JK, JK...but for reals!!! Closure is the ability to put two or more functions together and gives the ability to access functions that are in a child level scope from a parent level scope even after the parent level function has been terminated.  Yeah, try to say that ten times fast without smiling :)

4. Describe the four rules of the 'this' keyword.

A: So depending on the use of the "this" keyword, it will be used in different ways, called binding, which refers to what "this" binds to.
    a) In global binding, the value of this is the window or console unit. It's like everything.
    b) In implicit binding, the object to the left of the dot gets the "this.
    c) In new binding, when a constructor function is used, this refers to the specific instance of the object created by the constructor function.
    d) In explicit binding, whenever call, apply, or bind methods are used, this is explicity defined within the method.

5. Why do we need super() in an extended class?

A: Super is used to get data to be used in a child from a parent object.

### Task 1 - Project Set up

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the vnext branch, NOT master!

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.



### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.
