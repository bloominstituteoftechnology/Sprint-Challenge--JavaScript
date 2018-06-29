# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    Biggest difference is map is primarily used for executing a function creating new values and inputting them into a new array. ForEach is primarily designed to be for loop equivalent.
2. What is the difference between a function and a method?
    method is a function that is a property of that object it is nested in.
3. What is closure?
    Closure has to do with scope, and what data can be accessed within and outside functions. Global variables can be accessed anywhere, but variables nested with functions can't be accessed on a global basis. Functions scope is only invoked when the function is called.  
4. Describe the four rules of the 'this' keyword.
    Implicit Binding: when a function is called within a object everything to the left of the " . " is associated with this. this === objName.
    Window/Global Binding: is the window object of this and all its methods accessible to the programmer on a global scope.
    New binding: When an object constructor is used to create multiple objects, and the new keyword is used.
    Explicit binding: used when call, apply, and bind are used to directly call an object and its key values
5. Why do we need super() in an extended class?
    To ultimately pass up attributes from the nested function back to its parent function.
