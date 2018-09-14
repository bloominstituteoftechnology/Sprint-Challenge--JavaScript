Describe the biggest difference between .forEach & .map.
ANSWER: .forEach runs through every element in the array, can mutate the existing array.
        .map also calls the function on every element but creates a new array of the same size.

What is the difference between a function and a method?
ANSWER: Method is usually tied to an object while function can be on its own.
        Which means function can be called by it's own name, where is some object will have to use the method
        for it to be executed.

What is closure?

ANSWER: Closure is a variable that is saved for later use.
So for example, once a function is created of another function and the second function is returned. This will allow
the inner function to access variables from the outer function, these variables are now closures.


Describe the four rules of the 'this' keyword.
ANSWER:
Window binding: when this is not defined in any scope yet, it is global.
Implicit Binding: invoking a function like this.function();
Explicit Binding: Using methods .call(), .bind() and .apply() are used on a function
New Binding: When new Object is built out of existing class

Why do we need super() in an extended class?
ANSWER: It is used to access and call functions from the parent.