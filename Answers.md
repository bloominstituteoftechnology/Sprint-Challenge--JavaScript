1. Describe the biggest difference between `.forEach` & `.map`.
    A. The biggest difference between the two is that map returns a new array while forEach does not.

2. What is the difference between a function and a method?
    A. Methods are functions.  What seperates the two is that methods are define in objects and classes.  Functions
        are defined outside of objects and classes.

3. What is closure?
    Closure is when a function first looks inside of its own internal scope.  If it doesn't find what it is looking for from inside
        the function, it will look outside of the function.  If it still hasn't found what it is looking for it will look in
        at the window/global variables.

4. Describe the four rules of the 'this' keyword.
    A. The 4 principle of 'this':
        1. Window Binding - When 'this' is used globably it affects the window object.
        2. New Binding - When 'this' is used within a constructor function.  'This' makes sure the object's properties are used
            correctly when creating a new object.
        3. Implicit Binding - Used with dot notation.  Whatver is to the left of the dot is the context of 'this'.
        4. Explicit Binding - Used with .call, .apply, or .bind.

5. Why do we need super() in an extended class?
    A. Super is used to pass attirbutes back to the constructor of the parent object.