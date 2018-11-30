1. Describe the biggest difference between `.forEach` & `.map`.

   .forEach iterates through an array and can do something with each value.

   .map iterates over an array and returns a new array with values that can be completly different.

2. What is the difference between a function and a method?

   A method is a function that belongs to a specific object, or prototype and and typically points to that
   object or prototypes attributes.

   Functions dont have a specificity requirements. The are invoked only by calling them.

3. What is closure?

   Closer is the ability for a function to look outside its local scope for refrence to a variable that it needs.

4. Describe the four rules of the 'this' keyword.

   Implicit: {
   Implicit binding is when the refrence to the `this` key word that sits inside a method of an object
   is automatically assigned to the name of the object that it's being invoked on.

   }

   Explicit: {
   Explicit binding is when you must assign a refrence to the `this` key word by using .apply, .call, or .bind
   to point at what `this` should means.
   }
   New: {
   New binding is when you use a constructor function to creat a new object that recieves all the
   properties (and refrence to `this`) of the constructor itself.
   }
   Window: {
   Window binding happens when none of the other three binding methods are met. The 'this' key word then looks to window object for refrence to `this`.
   }

5. Why do we need super() in an extended class?
   We need super to bind the `this` key word from the class we are extending attributes from.
