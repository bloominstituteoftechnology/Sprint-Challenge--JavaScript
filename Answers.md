1. Describe the biggest difference between `.forEach` & `.map`.
    Where `.forEach` doesn't actually return anything (opting instead to mutate the array through callbacks), `.map` creates a new array
    with the results of calling a given function on every element in an array.
2. What is the difference between a function and a method?
    Functions take different variables as inputs as well as predefined variables. Methods can take input from predefined variables while
    also being able to take properties from specific objects within an array.
3. What is closure?
    A closure is a function that holds access to the parent scope whether or not the parent function has closed.
4. Describe the four rules of the 'this' keyword.
    • Window Binding – if there is no other binding explicitly assigned, the "this" keyword will bind to the overall project.
    • Implicit Binding – applying dot notation, you may invoke the function it is in, or another function elsewhere.
    • New Binding – allows you to assign a new value to an object using input.
5. Why do we need super() in an extended class?
    The super() keyward is used as a function that calls the parent class, passing the parent's parameters to the new extending class.