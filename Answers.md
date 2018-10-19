1. Describe the biggest difference between .forEach & .map.
    - The purpose of .forEach is to itterate over an array.
    - The purpose of .map is to perform some sort change on each item of an array and store it into a new array. 


2. What is the difference between a function and a method?
    - A method is just a function inside of an object.

3. What is closure?
    - A closure is just a function but closures allow us to access variables or the lexical scope of the nested function that it's in.

4. Describe the four rules of the 'this' keyword.
    - Window Binding - If no binding is attached, the window is used for "this".
    - Implicit Binding - Automatic. This keyword is bound upon invocation.
    - Explicit Binding - This is explicity bound by using a call or apply method. 
    - New Binding - Creating new objects in javascript with the "new" keyword. 


5. Why do we need super() in an extended class?
    - Super is what is binding the this keyword and the methods. Super is used to reference our parent in the __proto__ chain. 