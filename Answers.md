////////////////////////////////////////////Describe the biggest difference between .forEach & .map.
For each does not return an array unless specified, while map always returns an array. Both iterate but functional output is different.

////////////////////////////////////////////What is the difference between a function and a method?
A method is associated with something like an object or a class while a function isn't.

////////////////////////////////////////////What is closure?
A closure is the idea that a function has the ability to remember the environment it was created in. So if function1 has function2 insidie it, function2 can access all variables function1.

////////////////////////////////////////////Describe the four rules of the 'this' keyword.
- If the function is defined in the global scope, 'this' will atempt to reference the window object. - Window
- For new binding, 'this' will reference the newly created object. - New
- When using call, apply, or bind 'this' is explicitly defined. - Explicit
- 'This' references the object befor the dot. - Implicit

////////////////////////////////////////////Why do we need super() in an extended class?
It calls the parent constructor and allows us to use componenents from the parent class.