# Comprehension Questions
1. **Describe the biggest difference between .forEach & .map.**


    For each simply runs a function per each item in the array without fundamentally changing the array or creating a new one. Map affects each index of the array and stores the effect into a new array.
___  
2. **What is the difference between a function and a method?**
   
   A function, if it is in the global scope, can be called anywhere in the program. A method is unique to its object or context.
___
3. **What is closure?**
   
   A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.
___
4. **Describe the four rules of the 'this' keyword.**
   
   Window binding - 
   >Refers to how "this" is in the global context whenever a function is invoked without 
   any of other rules. If we aren't using dot notation and we aren't using call(), apply(), 
   or bind(), "this" will be our global object.


   Implicit binding-
   >Occurs when dot notation is used to invoke a function.


   New binding -
   >Is when "this" is used in a constructor function.


   Explicit binding -
   >Occurs when .call(), .apply(), or .bind() are used on a function.
___


5. **Why do we need super() in an extended class?**
   
   Super() tells the class to go "up one level" and get it's properties from that context.
