1. Describe the biggest difference between `.forEach` & `.map`.
.forEach loops through all of the objects in an array, while .map runs each object through a function then outputs the results into a new array.

2. What is the difference between a function and a method?
A function can stand alone, but a method is a function that is stored as a property of an object.

3. What is closure?
Being able to refer to a specific instance of a local binding.

4. Describe the four rules of the 'this' keyword.
Window Binding: With window binding, "this" will refer to the window object.
Implicit Binding: With implicit binding, "this" will refer to the object that is called to the left of the function that is invoked.
New Binding: With new binding, "this" will refer to the new object that is created using a constructor function after invoking the function with the "new" keyword.
Explicit Binding: With explicit binding, you can use either .call, .apply, or .bind depending on the situation, to pass in the object that will define "this."


5. Why do we need super() in an extended class?
super() refers back to the parent class so the child class can inherit the parent's properties.
