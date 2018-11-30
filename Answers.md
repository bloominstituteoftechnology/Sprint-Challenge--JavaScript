1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

1. forEach does not return anything, where as map does. 
2. A function exists in global scope on its own and a method exists within an object and that objects scope.
3. Closure is the ability for a function to access variables in scopes above it.
4. Window - 'this' refers to the window object (global scope). Implicit - refers to the object left of the dot. Explicit - using call, apply, or bind we can "explicitly" tell the function which object's context to use. New - using the new keyword this refers to the object being constructed when new is used.
5. The super method copies the parent classes' properties into the child class without having to explicitly bind the child classes' this to the parent class when using .call.