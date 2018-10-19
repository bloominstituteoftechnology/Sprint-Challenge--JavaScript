## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
The .forEach method executes a provided function once for each array element and is running a call back(calling function). The .forEach does not create a new array. Map like .forEach will always iterate over every element of an array. However, .map returns a new array. This is great if you want to convert to a new array and not have the original array destroyed. a return statement will be needed with map because you are returning new array. Simply put map is used for converting something into something new in a new array.


2. What is the difference between a function and a method?
A function is a named block of code that can be invoked from anywhere within the code. Arguments can be passed as parameters and assigned a return value to the variable. in JavaScript every function is an object. A method is simply a function inside an object. 

3. What is closure?
Closure is a type of scope that persists, whereas local scopes only belong to what is being invoked at the time. One can think of closures like a backpack that holds information and where you can keep the data with you to use later. Like a backpack the closure "encloses" an area and then that area is viewed from the inside out. This relates to the two pass compiler and the way it operates.

4. Describe the four rules of the 'this' keyword.
    1. Window Binding - if no other binding has been explicitly assigned it defaults to pointing to the window.
    2. Implicit Binding (automatic) - this is binding in objects and methods. It automatically points to the object if we do not specify a change to the behavior.
    3. Explicit binding (functions) - Call, Apply, & Bind. We can change the default behaviors with functions like call, apply, and bind to make them point to the things we want them to point to.
    4. New - we can use the new keyword to create instances of objects for the ".this" keyword to point to things that are created.

5. Why do we need super() in an extended class?
Super is required so that you can gain access to the .this items in the extended class. In other words,
super() allows us to have access from parent class and let's us use the "this" keyword.

