


1. Describe the biggest difference between `.forEach` & `.map`.
    One of the biggest differences is that .foreach, does not have a return type and .map returns an array.

2. What is the difference between a function and a method?
    both are blocks of executable code however a method lives inside an object.

3. What is closure?
    closure is a construct that exists inside scope. When the two pass compiler runs, it will identify the usage of a variable nested outside of where it was created.  scope creates a closure
    so that the state is available in the nested scope.

4. Describe the four rules of the 'this' keyword.
    Explicit - explicit binding is the usage of call,apply,bind. you are directly setting the 'this' context.
    Implicit - implicit binding of this, refers to the object left of the . operator where the function was invoked. 
    New - New binding is the use of constructor functions along with the new keyword, the 'this' context is derived at the time of object creation.
    Default  - when no bindings apply, default is applied. Default binding is bound to the global scope.

5. Why do we need super() in an extended class?
    Using super() sets up the prototypal inheritance chain between objects.
