1. Describe the biggest difference between `.forEach` & `.map`.

.map creates a new array and .forEach just mutates the current array

2. What is the difference between a function and a method?

    a function can be called multiple times but a method is specific to the object its ran on. 

3. What is closure?
A closure is a function and it's surrounding environment within which the function is defined and contains the local variables for that function.

4. Describe the four rules of the 'this' keyword.

this refers to either the global or window element. This is a newly created instance of an object if used with the new keyword. With implicit binding, 'this' will be bound to the object that is declared before the dot. With explicit binding, 'this' refers to whatever object is called with the function using .call, .apply or .bind.


5. Why do we need super() in an extended class?
super calls the parent constructor so you can pull that down and use it.