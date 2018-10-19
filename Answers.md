<!--

 1. Describe the biggest difference between `.forEach` & `.map`.
        Map returns a new Array of the same size, while forEach just iterates its way through elements of an array but does not have its own return.

2. What is the difference between a function and a method?
        A method is a function that belongs to a class or object.

3. What is closure?
        Closure is the ability to carry variables down in scope (to another block within a block.. like a for loop inside a for loop).  If the internal block has a reference to a variable that was defined in a block in which it is contained, then the variable will be carried in a 'backpack' called 'closure' to be used and referenced by the internal block.  If the internal block does not reference the variable, then there is no need for this to be carried over and the variable is not stored in closure. 

4. Describe the four rules of the 'this' keyword.
        Implicit Binding - used in methods.  when invoking a method that uses 'this', 'this' implicitly binds to the object left of the '.' in the method call.  ie)  julie.sayName() - any 'this' in the definition of the sayName method is then implicity bound to the object 'julie' when invoked.

        Explicit - explicit binding is used with functions.  One can define a stand-alone function with 'this' keyword.  but if the function is called without an explicit binding, 'this' will default to the window (bad).  can use function.call(object) to bind 'this' keyword to the object and run the function properly.  Can also use .bind and .apply similarly.  Call can be used to assign an individual argument.  Apply can be used to assign an array of arguments, and bind can store the binding for later use.

        New - used in invocation of constructors.  in constructing the new object we use '= new' which binds the 'this' keyword from the constructor function to the object being created / name left of the '= new'

        Window - this is what 'this' keyword binds to if it cant find any of the above to bind to.  This is ugly and causes issues.  writing "use strict" in code will prevent window binding and log error.

5. Why do we need super() in an extended class? 
        So that the 'this' keyword may be utilized properly between the child and parent constructors.
-->
        
