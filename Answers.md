
1. Describe the biggest difference between .forEach & .map.
    
    Both .forEach and .map take a function as a parameter and apply it
    it to each element of an array.  However, .map will automatically
    store the results from each element into a new array of the same
    length, while forEach does not.  When using forEach it is therefore
    necessary for the programmer to explicitly handle this, such as by
    storing results into an object created outside the scope of the 
    forEach.


2. What is the difference between a function and a method?
    
    A method is a function that belongs to an object (either by having
    been explicitly defined as such or by virtue of belonging to the
    prototype of an object) and is called using dot notation, while
    a plain function is invoked directly.


3. What is closure?

    When a function is defined inside of another function, the inner
    function carries with it the environment of the outer function
    including variables created in the outer function's scope, even
    after the outer function has exited.


4. Describe the four rules of the 'this' keyword.

    The four types of binding for the 'this' keyword are:

    A. Window Binding:  When there is no other binding (i.e., when in the global scope),
    the default binding for 'this' is the window (or console if running Node)

    B. Implicit Binding:  When calling a method belonging to an object using dot notation,
    'this' is implicitly bound to the object to the left of the dot.

    C. New Binding:  When the 'new' keyword is used to instantiate a class with a constructor,
    memory is allocated for the object being created and 'this' is bound to the new object.

    D. Explicit Binding:  When a function is invoked by using the call, apply, or bind methods,
    a context is passed as a parameter and 'this' is bound to that context.


5. Why do we need super() in an extended class?
    
    This is necessary to invoke the constructor of the parent
    class, which will not happen automatically if we don't
    call super()
