# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    .forEach mutates the original array by executing the provided function on each item in the array.
    .map does not mutate the original array but returns a new array after executing the provided function on each item in the orginal array.
2. What is the difference between a function and a method?
    A function is its own object. A method is a function stored inside of an object.
3. What is closure?
    Closure is a way for a function to make data available to another function outside of its original scope.
4. Describe the four rules of the 'this' keyword.
    I. Window/Global Object Binding - 
        The 'this' keyword in the global scope is bound to the JavaScript window object.
    II. Implicit Binding -
        When the 'this' keyword it used inside of a method, it is bound to the object the method is being written on.
    III. New Binding - 
        When 'this' is used inside of a constructor function, we create new binding by assigning parameters to 'this'.
    IV. Explicit Binding -
        We can bind 'this' to be inherited from a parent constructor using the '.call' or '.apply' methods.
5. Why do we need super() in an extended class?
    super() will handle all of our pseudo classical prototypal inheritence needs by calling down both the properties and methods from a parent constructor.
