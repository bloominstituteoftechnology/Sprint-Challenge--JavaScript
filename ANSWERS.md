# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    'forEach' loops thru an array but does not return a new array.
    '.map' retruns a new array with elements that have been modified.

2. What is the difference between a function and a method?
   a method is a function but is in a prototype or classes.

3. What is closure?
    closure is when a function or other block element has access to a varible not contained or passed to it that is within its parent function.

4. Describe the four rules of the 'this' keyword.
     Window/Global binding -- when in global scope the value of this will be window/console object.

     Implicit binding -- when function is called with a preceding dot the object before the dot is 'this'

     New binding -- when a constructor function is used 'this' refers to the specific instance of the object that is created and returned by the constructor function.

     Explicit binding -- when JS's call or apply method is used, 'this' is explicitly defined

5. Why do we need super() in an extended class?
    super allows access to properties of its parent class.
