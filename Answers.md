
Describe the biggest difference between .forEach & .map.<br>
.forEach performs a function on each specified item in an array resulting in changing the original array, while .map also performs a function on each item in an array, it creates a new array vs altering the original array.<br>
What is the difference between a function and a method?<br>
A method is a function that lives in an object. All methods are functions, but only some functions are methods - the functions found in objects. 
What is closure?<br>
It's a term used to describe when a function lives inside another function and can only be accessed through the function it's living in. Closure also requires the nested function is using only variables from the environment of the parent function. The practical and powerful part of closure is that even after the parent function runs and metaphorically dies, the closure (nested function + variables in environment) lives on, allowing the function and it's variables to maintain state.<br>
Describe the four rules of the 'this' keyword.<br>
1. Window/Global Object Binding - if "this" is used while in global scope, it will bind to the window object;<br>
2. Implicit Binding -used when referring to a property within an object, the word 'this' followed by'.' <br>
3. New binding - used when creating an object constructor. When the constructor is used to create a specific instance, new binding tells the parameters to attach in the new object being created from the constructor. <br>
* 4. Explicit binding - uses the word call or apply bring in the properties of an object into another object. <br>
Why do we need super() in an extended class?<br>
An extended class is creating a chain of prototypes, so super is the keyword needed to bring in the parameters of whatever the next prototype object is in the chain. 