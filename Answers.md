
    1. Describe the biggest difference between .forEach and .map

To me, the biggest difference is that .forEach modifies the original array that is invoking the function, while .map returns a new array without modifying the original.

    2. What is the difference between a function and a method?

A method is a function that is part of an object.

    3. What is closure?

Closure is a box of data (variable values) that is held in memory even when it is not the current scope.

    4. Describe the four rules of the 'this' keyword.

1) 'this' is found inside functions. If the function has something to the left of it, with a dot notation, where it is invoked, then that thing to the left is IMPLICITLY the context for 'this'.
2) Otherwise, instead of a normal function invocation, the function can be invoked through the .call(), .apply(), or .bind() methods of a function. In these cases, the first argument to the function invocation will be the context for 'this'. This is called EXPLICIT binding of 'this'.
3) If the function around 'this' is a constructor function, and therefore it's invoked through the 'new' keyword, then the 'new' binding tells 'this' that its context is the NEW OBJECT being created by that constructor.
4) If none of the above apply, 'this' defaults to referring to the WINDOW in which JavaScript is running.

    5. Why do we need super() in an extended class?

Assuming our child class is supposed to have all of the same properties as its base class (and then probably more as well), super() tells the object to run its base class's constructor, therefore assigning initial values to those properties (while remaining DRY).