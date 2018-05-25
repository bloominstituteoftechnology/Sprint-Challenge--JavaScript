# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    1a. .forEach overwrites the array, while .map creates a new array.
2. What is the difference between a function and a method?
    2a. A method is a function inside an object.
3. What is closure?
    3a. Used when nesting functions inside of functions. You can reference the parent's variable inside the child function. 
4. Describe the four rules of the 'this' keyword.
    4a.
    Window/Global Binding - "this" is bound to the window. the value of “this” will be the window/console Object.
    Implicit Binding - Function called by a preceeding dot. Whatever is directly left to the dot is being referenced.
    Explicit Binding - using .call .apply and .bind, "this" is explicitly defined.
    New Binding - Using constructor functions. "this" is correllated to "new"
5. Why do we need super() in an extended class?
    5a. To pass any new attributes back up to the constructor of the parent object.
