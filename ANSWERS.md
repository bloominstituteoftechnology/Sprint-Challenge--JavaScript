# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
A: The biggest difference is `.map` returns a new array that is a copy of the original but has been transformed by the callback.  `.forEach` just executes the callback on each array element but will always return undefined.
2. What is the difference between a function and a method?
A: A method is just a function within an object.
3. What is closure?
A: Closure is a bit nebulous, but basically it is closely related to scope.  The closure is the lexical environment that a function was called in. 
4. Describe the four rules of the 'this' keyword.
A:  Window - the most global scope is the window object.
    Implicit - When called, look to the left of the . to determine what 'this' refers to.
    Explicit - When 'this' is explicity assigned using .call, .bind or .apply.
    New - When using a constructer function invoked with the new keyword, this is bound to the new object that was created.
5. Why do we need super() in an extended class?
A: super() is needed to pass any new attributes up to the constructor of the parent object.
