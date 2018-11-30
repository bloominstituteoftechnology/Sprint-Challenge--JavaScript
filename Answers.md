## Answers 

1. Describe the biggest difference between `.forEach` & `.map`.
    The most significant difference between these methods is that forEach does not return a new array, but map does. This is relevant
    because forEach mutates the original array, while map returns a new array and thus does not alter the original data. 
2. What is the difference between a function and a method?
    Functions are defined outside of classes, while methods are defined inside of and used as part of classes. 
3. What is closure?
    Closure is a concept that essentially refers to the capability of a nested function to reach outwards and use other functions; however,
    the nested function itself is "closed in" - thus, closure - and external functions cannot reach inwards and use it.
4. Describe the four rules of the 'this' keyword.
    There are four principles of the 'this' keyword.
    - Global or window binding means that 'this' refers to the window or console object.
    - Implicit binding means that 'this' is bound to the object left of the dot.
    - New binding means that 'this' refers to the specific instance of an object that is created and returned by a constructor function.
    - Explicit binding means that 'this' is explicitly define when the .call or .apply method is used.
5. Why do we need super() in an extended class?
    Super is the inheritance method used for classes and allows the child element to be bound to the parent properties.