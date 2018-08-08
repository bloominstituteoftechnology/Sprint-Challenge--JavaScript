# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
The biggest difference between forEach and map is that forEach doesn't return anything. All forEach does it iterate through each item in an array. By default, map does that too, but map returns each iteration of the array. 
2. What is the difference between a function and a method?
Functions and methods are both functions. A method is a function that exists inside an object. 
3. What is closure?
Closure is the ability to reach outside of a nested function to use a variable. 
4. Describe the four rules of the 'this' keyword.
1- Window binding - This means that by default, this refers to the window. 2 - Implicit Binding - This is where the object left of the dot is what THIS is referring to. 3. Explicit Binding - This is the use of call/bind/apply to tell the function what the this keywords is in context of. 4. New Binding - Using "New" to make a copy of an object that the THIS keyword is bound to. 
5. Why do we need super() in an extended class?
super() in a class does what Object.create() and call/bind/apply does, it lets our class inherit the properties and methods from our base class. 
