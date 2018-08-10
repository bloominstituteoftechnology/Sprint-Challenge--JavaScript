1. Describe the biggest difference between .forEach & .map.

The biggest difference between .forEach and .map is that .forEach does not return anything, but .map returns a new array.

2. What is the difference between a function and a method?

The biggest difference between a function and a method is that a method has to be associated with an object. A function can be independent from an object.

3. What is closure?

Closure refers to a function’s ability to look outside of its lexical scope to find the value of a variable that is defined in an outer scope.

3. Describe the four rules of the 'this' keyword.

    1. Implicit Binding: This principle is what happens automatically when the 'this' keyword is referenced. When determining what the 'this' keyword is referencing under this principle, we look to the function invocation. The object to the left of the dot in the invocation is what the 'this' keyword is pointing to.
        
    2. Explicit Binding: This is when the 'this' keyword is told what to reference, using the .call, .apply, or .bind methods. The first parameter you pass into these methods is where the 'this' keyword will point to.

    3. New Binding: This principle says that when a constructor function is called using the new keyword, the 'this' keyword is pointing to the object that the constructor function creates when it is called. 

    4. Window Binding: This is the principle applied when function is invoked without dot notation, .call, .apply, .bind or the new keyword. Without those methods or keyword, the 'this' keyword points to the window object.


4. Why do we need super() in an extended class?

super() binds the ‘this’ keyword of your new object’s attributes to your parent object.

