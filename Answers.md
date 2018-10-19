
1. Describe the biggest difference between .forEach & .map.
.map creates a new array with your changed items. .forEach does not.
What is the difference between a function and a method?

2. What is closure?
a closure is a backpack. A variable that is stored in memory when it is used later on inside the same function scope as it was created.

3. Describe the four rules of the 'this' keyword.
  a. Window binding: 
     'this' isn't pointed at anything specific, therefore it points to the window. 

  b. Implicit Binding: 
     implied or automatic binding. happens whether we like it or not. 

  c. NEW Keyword Binding: 
     creates new object from scratch for constructor.

  d. Explicit Binding:
     Binding for functions It allows us to call attributes outside of our function scope and apply them in the function scope. It can 'call' the 'this' keyword with an individual argument, 'apply' it with an array of arguments, or 'bind' it for later use. 

4. Why do we need super() in an extended class?
It 'calls' and links the child constucor to the parent attributes as well as lets us use "this" for the child constuctor. 