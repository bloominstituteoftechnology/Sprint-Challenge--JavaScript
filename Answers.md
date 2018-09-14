
1. Describe the biggest difference between `.forEach` & `.map`.

  `.forEach` is basically short hand for a for loop, but it only executes the function once.

  `.map` creates a new array

2. What is the difference between a function and a method?

  A function is defined outside of an object
  A method is defined as the property of an object.  Also any time 'this' keyword is used, it's a method.


3. What is closure?

  In lexical scope closure works.  If there is a function inside of a function and something is called that isn't in the (inside) function, it will look outward to the function it lives in for what it needs.

  AKA if the child need a car and doesn't have one, they can go to their parent and ask for a car.

4. Describe the four rules of the 'this' keyword.

  1. Window - When in the global scope, the value of “this” will be the window/console Object.
  2. Implicit - Whenever a function is called by a preceding dot, the object before that dot is this.
  3. New - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
  4. Explicit - Whenever JavaScript’s call or apply method is used, this is explicitly defined.

5. Why do we need super() in an extended class?
  
  It pulls in the data from the class it's extending from. 