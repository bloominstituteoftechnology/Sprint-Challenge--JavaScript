1. Describe the biggest difference between `.forEach` & `.map`.
- .forEach is an array function that applies a given function to each element of the array
- .map is an array function that applies a given function to each element of the array, and returns a new array with outputs of the function on each element of the given array.

2. What is the difference between a function and a method?
- a function is a manipulation of the element provided
- a method is a function within an object

3. What is closure?
- Closure is the referencing of an variable outside the immediate functional scope

4. Describe the four rules of the 'this' keyword.
- Implicit binding: within the definition of a constructor, the referencing of the 'this' to the scope of the constructor definition
- Explicit binding: when invoking a method from a constructor, the referencing of 'this' to the scope of the new constructor object
- New binding: when declaring a new constructor, the referencing of 'this' to the scope of the new constructor
- Window binding: the referencing of 'this' to the entire window

5. Why do we need super() in an extended class?
- super() allows us to access the details of the attributes of the parent class