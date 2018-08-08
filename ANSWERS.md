# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
- The biggest difference between `.forEach` and `.map` is that `.forEach` will iterate over an array and return the items in that array as is, whereas `.map` will allow you to alter the contents in that array, or remap them, and return that newly modified array.

2. What is the difference between a function and a method?
- A function stands alone, whereas a method is a function that is the value of a key in the key:value property of a given object. 

3. What is closure?
- Closure is the local binding created by a function unique to that instance of the binding that can also be retrieved at a later time after the creating function has already been run. 

4. Describe the four rules of the 'this' keyword.
   1. Window
    - When there is no previously initiated object for the 'this' keyword to look to, then it will look to the highest-order object by default, which is the Window object. 
   2. Implicit
    - If the 'this' keyword is initiated within an object, it will refer to that parent obeject, referencing those properties/methods. 
   3. Explicit
    - Explicit allows a user to assign 'this' to an object of choice, using methods inherent in the profporty of type function, namely .call(), .apply(), and .bind(). 
   4. New
    - New creates a new object from an object constructor, assigning 'this' to the newly constructed object's properties/methods. 


5. Why do we need super() in an extended class?
- Super inherets the refrenced properties of 'this' as well as the ability to call functions on a parent object. 
