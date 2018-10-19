

1. Describe the biggest difference between .forEach & .map.
    forEach loops through each thing in an array and calls a function
    map loops through each thing and returns an array.

2. What is the difference between a function and a method?
    a function is called by name
    a method is called by a name that is associated with an object

3. What is closure?
    the scopes  that a function can get access to. can have global scope, outer functions variables, and its own scope.

4. Describe the four rules of the 'this' keyword.
 1.
        implicit binding:
         this is when you use "this" inside of a object, "this" in this case will check the object 
        for the key that you are asking for and return the value.
 2. 
        explicit binding:
        this is when you use methods outside of the object to attribute keys to an object. You can use .call(), 
        .apply() and .bind().
        .call() : explicitly states the attributes that you want to take.
        .apply() : allows you to pass in an array of arguments instead of one by one.
        .bind() : allows you to store the attributes into a variable. 

 3. 
        new Binding: 
        You can create a prototype function, and use it to create new objects with the same keys as the prototype.
 4. 
        Window Binding: 
        the window is the object that is defaulted to when you use this without anything to point to. 
        you can "use strict" to prevent yourself from referencing the window object.
5. Why do we need super() in an extended class?
    super calls the methods or functions of the parent class.