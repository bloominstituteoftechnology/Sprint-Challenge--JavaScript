# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

-They both iterate through an array, but .map creates a new array which stores the new values base of the 
-function calling it. Foreach just iterates through an array but does not create a new one.

2. What is the difference between a function and a method?

-A function can take in arguments and can return a value(s). 
-A method is similar to a function, but is primarily used inside of classes.

3. What is closure?

-A function looking outside of itself for a value.
-It keeps checking upwards until it comes across the 
-value its searching for.

4. Describe the four rules of the 'this' keyword.

-If a function is just returning 'this' or console logging it,
it will be considered Window Binding. Since syntactically, it's 
not doing any of the other rules.

-Implicit is an object followed by a dot then a function.

-Explicit is when multiple arguments are being passed through
and the .call and .apply can be used.

-New is for making constructors to make more objects

5. Why do we need super() in an extended class?
-The super allows access to the '.this' keyword for 
that class.
