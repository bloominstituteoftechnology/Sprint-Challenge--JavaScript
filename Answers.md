1. Describe the biggest difference between `.forEach` & `.map`.

.forEach does not return anything, .map returns a new array.

2. What is the difference between a function and a method?

a function is a global object, and a method is exclusively held inside of a constructor.

3. What is closure?

Closure is when an inner object inherits props from an outer object and can use them even though the outer object has been popped from the stack.

4. Describe the four rules of the 'this' keyword.

Global: 'this' points to the window or the top most accessible element.

Implicit: 'this' is accessed through dot notation. It will always point to the object that called it.

Explicit: function and object are represented as individuals and 'this' inside the function will always point to the object that calls it.

New: 'this' in a new concept will point to the set values within the constructor.

5. Why do we need super() in an extended class?

  super() replaces call, apply, or bind and Object.create so that the class being extended to has both props and methods of the class extended. 
