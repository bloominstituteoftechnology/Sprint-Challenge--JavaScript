# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

forach iterates through the array items, whereas map returns a new array by iterating each item in array and doing something(whatever it is in the block) with them.

2. What is the difference between a function and a method?

They both do the same thing except methods are attached to an object.

3. What is closure?

Closure is a persistent scope which holds on to local variables even after the code execution has moved out of that block. 
It is expected any variables that were in scope when the function was first declared to still be in scope when we later invoke the function, even if we call the function in a completely different scope.

4. Describe the four rules of the 'this' keyword.

 --Global binding: It references to the window or console object when called globally.

 --Implicit binding: 'this' refers to the object preceeding the dot when object.function is called.

 --'new' keyword binding: With the use of the 'new' word new object is created and 'this' refers to that object.

 --Explicit binding: With the use of call, apply or bind functions, the object that is referred by this is called.


5. Why do we need super() in an extended class?

It is kind of an alias for Parent.call(this, options). It links class' constructor function to the extended class by using 'this'. It assigns parent class' arguments/options to th extended class construction.