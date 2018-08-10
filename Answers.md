# Answers

## Question 1 - Describe the biggest difference between `.forEach` & `.map`

* `forEach` iterates thru once for each of the elements in the array. `.map` creates a new array and iterates thru once for each of the elements calling a function on every element.

## Question 2 - What is the difference between a function and a method

* Both are functions but using a function inside of an object is called a method. Object methods are plain properties which have functions assigned to them. Behavior is the only difference.

## Question 3 - What is closure

* Closure is an inner function that has access to the outer - enclosing function's variables in the lexical scope.

## Question 4 - Describe the four rules of the 'this' keyword

* Window binding is if no other binding is attached, the window is what is used for `this`.
* Implicit is `this` is bound by invocation.
* Explicit is `this` is bound by using `call()`, `apply()`, or `bind()`.
* `new` creates an instance of an object that has a constructor function.

## Question 5 - Why do we need super() in an extended class

* Super lets us bind the `this` keyword onto the object. Without it, we would not be able to use anything with the `this` keyword in it's inheritance chain.