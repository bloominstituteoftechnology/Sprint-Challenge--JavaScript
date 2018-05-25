# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`. <br>
   `.forEach` mutates the original array by executing the provided function on each item in the array. <br> `.map does` not mutate the original array but returns a new array after executing the provided function on each item in the orginal array. <br>
2. What is the difference between a function and a method? <br>
    A function is its own object. A method is a function stored inside of an object. <br>
3. What is closure? <br>
    Closure is a way for a function to make data available to another function outside of its original scope. <br> <br>
4. Describe the four rules of the 'this' keyword. <br>
    I. Window/Global Object Binding - <br>
        The `this` keyword in the global scope is bound to the JavaScript window object. <br> <br>
    II. Implicit Binding - <br>
        When the `this` keyword it used inside of a method, it is bound to the object the method is being written on. <br> <br>
    III. New Binding - <br>
        When `this` is used inside of a constructor function, we create new binding by assigning parameters to `this`. <br> <br>
    IV. Explicit Binding - <br>
        We can bind `this` to be inherited from a parent constructor using the `.call` or `.apply` methods. <br> <br>
5. Why do we need super() in an extended class? <br>
    `super()` will handle all of our pseudo classical prototypal inheritence needs by calling down both the properties and methods from a parent constructor.
