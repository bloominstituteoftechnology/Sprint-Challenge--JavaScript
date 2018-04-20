# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    * '.forEach' interates through an array, like a 'for loop', but doesn't return a new array. '.map' iterates through an array like a 'for loop' and in the process does something to each item it traverses, and unlike '.forEach', returns a new array.
2. What is the difference between a function and a method?
    * A function and a method are essentially the same thing, with the difference between the two being that a method is assigned to or belongs specifically to an object.  
3. What is closure?
    * Is a function that returns an inner function. The inner function has access to its inner variables, as well as access to the outer function's variables and access to variables in the global scope as well. 
    * Nothing more than accessing a variable outside of a function's lexical scope.
4. Describe the four rules of the 'this' keyword.
    * Explicit binding:
        - Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
        - We call these explicit because you are explicitly passing in a this context to call() or apply(). 
        
    * Implicit binding: 
        - Implicit binding occurs when dot notation is used to invoke a function. 
    * Default Binding
        - If we don't use explicit binding or implicit bidning, 'this' will be our global object. 
    * New Binding
        - Occurs when we use the 'new' keyword. When we use 'new', it passes along 'this' with it by defualt. 


5. Why do we need super() in an extended class?
    * ‘super’ when used with JS class syntax replaces ‘.call’ in JS constructor syntax. 
