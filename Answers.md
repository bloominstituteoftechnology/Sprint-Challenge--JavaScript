1. Describe the biggest difference between `.forEach` & `.map`.
.forEach mutates the original array by calling functions on each of its elements, whereas .map calls functions on each element, then returns the values to a new array of the same size as the original.

2. What is the difference between a function and a method?
All methods are functions, but not all functions are methods. A method is a function that exists as a property on an object, which is implicitly passed to the method each time it is called.

3. What is closure?
A closure refers to a function's ability reach outside of its enclosed, local/private scope and into above functions or the global scope to access its variables. It is able to actually access the outer scope when it is called as opposed to simply taking a snapshot of the variables at the moment it was created.

4. Describe the four rules of the 'this' keyword.
    1. Implicit Binding: when invoking a function, "this" refers to object to the left of the dot.

    2. Explicit Binding: when using properties like .call(), .apply(), and .bind(), "this" is bound to a particular object or array that's passed in as a parameter (which argument varies on the method).

    3. new Binding: when using the "new" keyword to create an object from a constructor, "this" is bound to the new object

    4. Window Binding: the default, when "this" is bound to the global scope. Not recommended.


5. Why do we need super() in an extended class?
    super() passes new attributes in a child class constructor back up to the parent constructor. This allows the child to use the keyword "this" on attributes originally created in the parent constructor.
