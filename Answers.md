<!-- ## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class? -->

1. .map leaves the array unchanged and returns a new array wearas .forEach affects the original array. 
.map often times is faster and is what you want to use if you are changing data.
.forEach is just if you want to do something with your existing data.

2. A method is an action that can be preformed on objects. A function is a set of statements that preforms a task or calculates a value. 

3. Closure gives access to an outer function from an inner function. 

4. Four rules of the 'this' keyword:
    - Implicit Binding: When used the object before the dot is what this will be bound to.
    - Explicit Binding: Is when you use .call(), .apply(), or .bind() on a function.
    - New Binding: When a constructor function is used this refers to the object that is created and returned by the constructor.
    - Window/Global Binding: When the global scope, the value of 'this' will be the window.console object

5. Because it is used to access and call funcitons on an object's parent.