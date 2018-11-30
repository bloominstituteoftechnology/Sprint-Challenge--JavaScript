1. Describe the biggest difference between .forEach & .map.
 - Both of these array methods will increment through each item in an array and
   something but the biggest difference between them is that .map will return a
   new array and .forEach will either modify the original array or doing something
   else with each item like logging the items out.

2. What is the difference between a function and a method?
  - A function are both similar, they are blocks of code protected by curly braces and
    a name. The difference is that a method is held within an object and accessed or invoked using either dot notation or bracket notation while a function can just be invoked by name.

3. What is a closure?
  - A closure is when an inner function or inner local scope has access to variables outside of its own scope via closures. That being said a closure will only be created if the inner scope uses the variables outside of its scope.

4. Describe the four rules of the 'this' keyword.
  1. Global/window binding is when 'this' is not bound to anything specific so 'this'
     refers to the window object.
  2. Implicit binding is when you have a method inside of an object so 'this' is         almost automatically bound to the object the method is inside of. In other words    if you are invoking the method using dot notation then the object left of the       dot is what this is bound to.
  3. New binding is when you use a constructor to create a new object. The new           keyword is how you know where 'this' is bound, it is refering to the new object     that was created using the 'new' keyword.
  4. Explicit binding is when you tell 'this' what you want it to refer to. You do       this using .call, .apply or .bind all three tell this what to refer to but they     all have slight differences in how they take arguments.

5. Why do we need super() in an extended class?
  - It lets us use all the key/value pairs setup by the parent constructor and also     lets us use the methods that were created in the parent constructor. 