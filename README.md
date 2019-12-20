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

1.forEach loops through every element in an array. It is best used to invoke functions on every element (or console.log all elements for debugging purposes).

It does not automatically create a new array. However, it is possible to manipulate .forEach to act as map by creating a new array before using .forEach and using .push within the .forEach:

    let arr = ['amber', 'lowe'];


    let newForEachArr = [];
     arr.forEach(el => newForEachArr.push(`${el}@gamil.com`));

     console.log(newForEachArr);   //  [ 'amber@gamil.com', 'lowe@gamil.com' ]

    .map always creates a new array. Using .map to achieve the same result as above is much simpler.

    let newMapArr = arr.map(el => `${el}@gamil.com`);

    console.log(newMapArr);       //  [ 'amber@gamil.com', 'lowe@gamil.com' ]

2. What is the difference between a function and a method?

        A method is a function. But not every function is a method.

         A method is a function that is inside an object.

3. What is closure?

         Closure is a way to capture information to be used later outside of its scope.

4. Describe the four rules of the 'this' keyword.

        4 ways to determine what 'this' is pointing to (aka What is the calling object?) in order of precedence:

        1)  new binding: when new is used with prototypes a new object instance is created. 'this' within the newly created instance will provide its own properties (instead siblings, parents, etc.)

         2)        .call(), .apply(), .bind() explicitly bind this to the first parameter within the ().

        .call(objToBind, paramOneOfObjToBind, paramTwoOfObjToBind, etc.)
         .apply(objToBind, [arrayOfAllTheParamsForObjToBind])
         .bind(objToBind)        => This does not invoke the method. It must be later executed.

         3)  implicit binding: is when a method is called. Here the object is to the left of the method. Example: obj.myFunkyFunc();

         4) global / window binding. When this has not been bound by the 3 other ways above, it is bound to the global or window binding (which generally should be avoided.)


5. Why do we need super() in an extended class?

         When creating prototypes using classes, super() acts as the .call including this when creating prototypes without using classes. In other words, super binds child to parent so child has access to the parent's properties (but not vice versa).



## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
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
