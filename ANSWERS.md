# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

  .forEach doesn't return anything, it just executes the given function once for each item in the array while passing in the current item and position

  .map executes the function for each item in the array, taking in the item and the position, but the function has to return something which then is saved at the current position in the array that gets returned when .map finishes executing.

2. What is the difference between a function and a method?

  A method is linked to a class.


3. What is closure?

  The data a function has access to via scope


4. Describe the four rules of the 'this' keyword.

  1. Window Binding - The global binding referring to the widow/console
  2. Implicit Binding - Dot notation, it's bound to whatever was before the dot
  3. New Binding - The specific instance of an object, such as in a constructor
  4. Explicit Binding - Call or Apply method is used.


5. Why do we need super() in an extended class?

  To call the parent class' constructor in order to apply it's variables to the current copy of the object.
