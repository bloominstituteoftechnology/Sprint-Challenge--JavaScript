**Describe the biggest difference between `.forEach` & `.map`.**
// .forEach calls a function on each item in your array while .map returns a new array after running a function on each item of the array you ran .map on.

**What is the difference between a function and a method?**
// A method is a function built in to an object

**What is closure?**
// Closure is having a function inside a function returning something before the outside function is finished executing, allowing the outside function to seemingly have access to what is only in the inner          functions scope

**Describe the four rules of the 'this' keyword.**
// Assuming you mean binding types?
// Explicit - when you're using a call()/apply()/bind()
// Implicit - when the object you're referring to is on the left (when you're calling a method)
// Window - global/default binding
// New - when you're creating a variable with a constructor function


**Why do we need super() in an extended class?**
// It binds the "this" keyword to the new class (or variables created from the class)