# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
-forEach - Loops through items in an object or array. It doesn't change the items inside, it calls them, and does something collectivly, like saving them all to an index. 
-.map - Map returns a new array by making a change to each item using the provided function. An example of this would be capitalizing the first letter of each string. 
2. What is the difference between a function and a method?
- Methods are functions too, but they are setting a parameter for an object. 
3. What is closure?
- Closure is used for inheritance. When nesting functions, child functions can access the parent scope. 
4. Describe the four rules of the 'this' keyword.
Window/global - Global scope, 'this' uses window object.  
Implicit - Used inside of the object. Uses .call, .apply, or .bind method. 
Explicit - Uses .call, .apply, or .bind method. 
New - Used in constructor funcion with newly created object. 
5. Why do we need super() in an extended class?
- Gives parent class the attributes of a child class. 
