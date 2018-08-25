1) Describe the biggest difference between .forEach & .map.
    One of the differences between .map and .forEach is that .map allocates memory and stores return values where as .forEach throws away return values and always returns undefined. 

2) What is the difference between a function and a method?
    A method is basicly a function that is defined as a property of an object.

3) What is closure?
    Closure has to do with where the variables are accessable. For example if a variable is defined in a parent function it can be accessed in the child function due to closure but the variable in the child function can not be accessed from the parent function.

4) Describe the four rules of the 'this' keyword.
    Window/ Global Object Binding
        The window is where everything lives. on the global scope, the fvalye of 'this' will be the window Object.
    Impicit Binding
        When we call a function by a preceding dot, the object before the dot is 'this'.
    New Binding
        This one is easy to identify because it uses the new keyword to create a specific instance of the object and it is returned by the constructor function.
    Explicit binding
        This happens whenever we us the call or apply method.
      
5) Why do we need super() in an extended class?
    Super() is used to connect the child class to the parent. Basicly it calls in all of the properties and prototypes associated with parent class. 
