# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
--`forEach` is a much more resource-intensive version of a for loop that goes through an array until the sequence is terminated; it will return what it is told to, but it has to be explicitly instructed to put the results into a new variable/array. `.map` on the other hand dives into the array and extracts the desired elements `and` puts them in a newly created array, which saves you some work.

2. What is the difference between a function and a method?
--A function can be defined anywhere - with or without a name. A method is attached to something else, like an array, an object, a class, or even a function.

3. What is closure?
--Closure is the ability for a function to use data from outside its direct local scope. In essence, closure lets a function use stuff from outside itself.

4. Describe the four rules of the 'this' keyword.
--
a. Window binding tends to reach all the way up to the global object (the window), and unless  `strict` is involved, it generally causes problems.
b. Implicit binding causes this to refer to the object that directly precedes it (the one on the left).
c. New binding encases `this` within the scope of an object (class, array, etc.), and can be reliably used within its context as long as proper naming conventions and scope is maintained.
d. Explicit binding relies on very clear relationships to be defined in order to work correctly; this makes it simpler to structure objects that pass down `this` properly.

5. Why do we need super() in an extended class?
--`super()` replaces the Class.prototype = Object.create statement that is required to successfully pass down methods to child classes of a parent class that they are inheriting elements from. 
