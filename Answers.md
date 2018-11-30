1. Describe the biggest difference between `.forEach` & `.map`.
    `.forEach` just allows you to loop through an array but `.map` not only loops
    through but passes each element through a callback and it also returns a whole different array. `.map` can be very useful for conversions. 
2. What is the difference between a function and a method?
    A method is a function that is held inside an object. 
3. What is closure?
    Closure allows for nested functions to access variables inside the function they are nested in when they need to use them. This happens because a copy of the the variables used is made available to the child function. Closure is like a backpack that holds all the variables that the nested function will need.
4. Describe the four rules of the 'this' keyword.
    Principle 1 - Global object binding - the `this` keyword will point to the window object
        if it is not within an object. 
    Principle 2 - whenever a function is called with dot syntax, this points to the object      left of the dot
    Principle 3 - New Binding - whenever an instance of an object is created, this points to    the instance of the object. 
    Principle 4 - Explicit Binding - this is whenever you use `.call` or `.apply` to explicitly point to this. 
5. Why do we need super() in an extended class?
    `super()` allows us to acces the methods and this from the parent class by the child class.
