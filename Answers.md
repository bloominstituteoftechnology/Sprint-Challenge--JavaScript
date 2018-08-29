1. .map will return a new array and .forEach will not

2. functions and methods are essentially the same thing, except a method is a function that is inside an object.

3. closure is the scope that a function can access variables in.  i.e. a child can access its parents variables, but a parent cannot access the  
   variables inside its children.

4. New binding
        you build a constructor function, and when you create a new instance of that object, you are binding 'this' to that new object.
    
    Implicit binding
        When you create a standalone object (not from a contructor function), 'this' will apply to THAT object

    Explicit binding 
        You explicitly set what 'this' refers to by using .call, .apply, or .bind

    Window binding
        'this' refers to the Window in this case.

5. you need super() to bring the parent constructor functions parameters into the child. Extends will set the childs prototype equal to that of     the partents