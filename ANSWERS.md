# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
forEach is used to iterate over multiple items, such as in an array.
map is mainly used for converting all items into something else, like adding 2 to an array of numbers.

2. What is the difference between a function and a method?
In JavaScript functions can be objects and methods are functions inside of a function. In regards to objects - a method is a function inside an object (which is a function).

3. What is closure?
A closure gives you access to an outer function's scope from an inner function. The inner function will have access to the variables in the outer function.

4. Describe the four rules of the 'this' keyword.
1) window binding: this becomes window or console Object
2) implicity binding: when a function is invoked by with a . in front of it, the obj before the . is this
3) new binding: when a constructor is used, this refers to a specific instance of the obj that is made and returned
4) explicit binding: specifically (or explicitly) passing this into call() or apply()

5. Why do we need super() in an extended class?
super() is used in extended classes so that the new class being made will inheirit the properties/attributes from the base class
and thus allowing the extended class to also have access to those properties/attributes.
