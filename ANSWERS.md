# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
The biggest difference between `.forEach` and `.map` is that map returns a new array of elements while in turn passing each element back to the callback.


2. What is the difference between a function and a method?
All methods are functions, but not all functions are methods.  Functions are defined outside of classes and methods are defined inside the classes.

3. What is closure?
If a variable isnt defined in a function scope, the function will outside of its scope and search for a variable that is being referenced in the outer scope. Per MDN: "A closure is the combination of a function and the lexical environment within which that function was declared".

4. Describe the four rules of the 'this' keyword.
    * 1. Principle 1: Window Binding
    The 'this' keyword will refer/default to the global scope (e.g window object) when is not passed in a function.
    * 2. Principle 2: Implicit Binding
    The 'this' keyword will point to the object thats left of the dot when invoking the function.
    * 3. Principle 3: New Binding
    The 'this' keyword is used when creating constructor functions.  Constructor functions create objects.
    * 4. Explicit Binding:
    We can reassign the values of constructor objects by binding them to new ones with the use of .call or .apply.

5. Why do we need super() in an extended class?
If we are using extends, `super()` needs to be called within the constructor function to pass any new attributes back to the constructor of the parent object.