# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
    * Answer: `.forEach` executes a function on each element in an array.  `.map` does essentially the same thing, with the primary difference being that the original array is not changed in this case, and instead a new array is returned with a mapped version of everything from the original array. 
2. What is the difference between a function and a method?
    * Answer: Methods are functions, but methods are functions that are properties of objects.
3. What is closure?
    * Functions in JS are closures - the function can reach to access variables defined outside its scope.  
4. Describe the four rules of the 'this' keyword.
    * Answers:  1. Window binding - the keyword 'this' points to the window/global object if is                 not pointed elsewhere.
                2. Implicit binding - called by a dot function (aka method), the object before (ie to the left of) the dot is what 'this' refers to.
                3. Explicit binding - using `.call`, `.apply`, or `.bind` on a function (in the global scope for instance) to explicity tell it what we want 'this' to refer to, for example passing in an object as the first argument in `.call`. 
                4. New keyword binding - when using constructor functions to create objects with the keyword 'new', 'this' will refer to the new object being created.
5. Why do we need super() in an extended class?
    * Answer:   `super()` is what gives us access to the 'this' keyword reference from the parent               class as well as the calling of functions.
