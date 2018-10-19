## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
.forEach takes a function and runs the function in each item of the object
.map takes a function and runs the function in each item of the object then return a new object

2. What is the difference between a function and a method?
to put it in simple words,
a method is a type of function that is more semantic( more specific meaning)
method means that the function belongs to an object relatively
3. What is closure?
a closure is a type of scope that usually happens with nested functions.
the idea is that what's inside the inner function has the ability to use variables declared outside of it. However, the outter function does not have the ability to use variables declared inside the inner function. This behavior is what is called a closure (a two- way mirror that only inside can look outside, but outside cannot look inside).
4. Describe the four rules of the 'this' keyword.
What I learned is that people wrote rules for the language to be able to use "this" keyword. there are 4 rules.
1st. if defaults to pointing to the window, called window binding.
2nd. it automatically points to the object if we do not specify a function to change the behavior, called implicit binding.
3rd. we can change these default behaviors with functions  like .call/.apply/.bind to make them point to things we want them to point to, called explicit binding.
4th, we can use new keyword to create instances of objects for the "this" keyword to point to things that aren't created yet. 
5. Why do we need super() in an extended class?
because it's used to access and call functions in the parent constructor.
without it, the current constructor does not know what the current "this" word is pointing to.