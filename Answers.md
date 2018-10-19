1.) Describe the biggest difference between .forEach & .map.

For each is will execute a provided call back function for each element in a given array. Map does the same thing with the exception of also returning a new array of elements while in turn passing each element back to the callback. 

2.) What is the difference between a function and a method?

Methoda are also functions but the diffrence is that they're contained or bounded to a specific object.

3.) What is closure?

Closure is a functional scoping method containing local or free variables, these free variables are only affected by the local functional scope.

4.) Describe the four rules of the 'this' keyword.

1. Global Scope - This is when "this" is applied globally to the browser window object and can be viewed in the browser console.
2. Implicit Scope - This is when "this" is bounded to a specific object.
3. Explicit Scope - This is when "this" is bound to a specific function like call/array that binds an argument to an object.
4. New Scope - This is when "this" is bound to the creation of new objects.

5.) Why do we need super() in an extended class?

We need super in an extended class in order to provide access to the "this items" in the extened class.