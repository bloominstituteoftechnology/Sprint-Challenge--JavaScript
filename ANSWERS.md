# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    `.forEach` cycles through each element of an array and does what is told once, where as `.map` creates an entirely new array based on the function (what it is told to do).
2. What is the difference between a function and a method?
    A function can be used anywhere to perform an operation whereas a method is usually used with classes and prototypes (I think).
3. What is closure?
    Closure refers to the scope of a function and determines/defines what variables it (the function) has access to.
4. Describe the four rules of the 'this' keyword.
    I"m not sure what is meant by "rules" here unless it's refering to bidings: Window/Global, Implicit, New, Explicit. 
        Window/Golobal states that the value of "this" is set globally, within the window or console. 
        Implicit is when a function uses dot notation in conjunction with "this." Whatever is before the dot is "this."
        New: When a constructor is used, "this" refers to what is used and set within the constructor function.
        Explicit: "This" is used in this instance when we want to create a new object and essentially override the "this" value with .call or .apply in a new context.
5. Why do we need super() in an extended class?
    It is the command used to access and call the previous functions on the parent of the object. Without it, the previous functions (and maby properties, I'm not quite sure but I lean towards thinking so) would not be called and accessed. Without the `super()`, the child would not have access to what the parent did.

