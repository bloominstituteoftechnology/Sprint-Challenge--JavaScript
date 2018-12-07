<!-- ## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class? -->


================================ANSWERS:

1. .map changes information in an array but not perminatly. Like, if you want to make letters uppercase 
but not keep them that way forever. .forEach changes the original array for good.

2. Amethod is an action that can be preformed on objects. A funciton is a set of statements that preforms a task or clculates a value.

3. Closure gives access to an outer funciton from an inner function.

4. Four rules of the 'this' keyword:
    - Implicit Binding: When used the object before the dot is what this will be bound to.
    - Explicit Binding: We control this! We control whichc 'this' keyword is being applied. And when you use .call(), .apply(), or .bind() on a function.
    - New Binding: When a constructor function is used this refers to the object that is created and returned by the constructor. Capitalize the first letter of constructor function to let the next
    developer know what you are using.
    - Window/Global Binding: If you think of an image of a forest this is the entire forest and
    not just one tree! When the global scope, the value of 'this' will be the window.console object.

5. It is used to access and call funcitons on an object's parent.
