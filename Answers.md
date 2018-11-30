1.) Describe the biggest difference between .forEach & .map.
        .forEach cycles through an array executing a function on each item in the array but doesn't create a new array of the resulted function, however 
        .map will execute a provided function on each item in array and store the results to a new array. 
        So the array creation is the ig difference between the two.

2.) What is the difference between a function and a method?
        A method is a function that has been declared in an object. 


3.) What is closure?
        Closure occurs when a function is declared and it creates a scope or private environment within its declaration. When this happens, the variables
        and/or functions inside of that function are able to reach outward for information, but can't look inward deeper into the other nested functions for information.

4.) Describe the four rules of the 'this' keyword.
        1. Global binding which binds the this element to the golbal scope --very large!!
        2. Implicit binding - when the method is invoked, the element to the left of the dot in the dot notation is what the this keyword is bound to or represents.
        3. Explicit binding - the programmer controls the binding of this by using call, apply or bind methods on a function, which allow the this keyword to be passed to that function.
        4. New binding- if a new constructor function is created using new it allows you to bind a specific object instance already created to the new constructor function

5.) Why do we need super() in an extended class?
        The super keyword binds the attributes in the parent class to the child class and allows them to be called using the child attributes' parameter name
