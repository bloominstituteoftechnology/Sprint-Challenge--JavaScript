1 Describe the biggest difference between .forEach & .map.
2 What is the difference between a function and a method?
3 What is closure?
4 Describe the four rules of the 'this' keyword.
5 Why do we need super() in an extended class?

1. foreach has no return, map creates a new array and returns it
2. methods are functions defined in an object as a property while functions are defined outside an object
3. closures are inner functions that have access to an outer functions variables or global variables
4. "this" if not bound will refer to "window", "this" can be explictly bound using .call .apply or .bind, if this is logged as a method of an object this will refer to the object (Implict binding), if "new" is used to create a new object and "this" is logged inside the constructor function "this" will refer to a new object.
5. super() is used in the child object to inharit the parent objects properties
