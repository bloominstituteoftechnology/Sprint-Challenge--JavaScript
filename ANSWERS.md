# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

         `.forEach` is an array method that replicates the functionality of a traditional for loop.  Wherein a callback function may be placed, which accepts parameters in order to modify the array with custom functionality.  


2. What is the difference between a function and a method?

        The difference between a function and a method is that a function has been declared in the global scope, whereas a method is a function that's been declared with the scope of a function, class or object.



3. What is closure?

        A closure is the method of using functions to create multiple, possibly nested, lexical scope contexts.  In so doing, one may define a variable in a certain scope so as to keep that variable and its value inaccessible from scopes outside of that scope that variable is defined. 



4. Describe the four rules of the 'this' keyword.

        The four rules, or contexts, of the `this` keyword are:
                1. Global scope: wherein `this` refers to the global scope.
                2. Implicit scope: wherein `this` refers to the function/object within which `this` is used or method is called.
                3. Explicit scope: wherein `this` refers to the application of the methods `apply()`, `call()`, or `bind()`.  The latter of which are used to apply an the scope of one function to another function when calling the latter function.
                4. "new" scope: wherein `this` refers to the instance of the new object created via a constructor.



5. Why do we need super() in an extended class?

            We need `super()`, in an extended class, so as to apply the arguments of the child class to the extended/parent class. 
