1. The biggest difference between .forEach() and .map() is that .map() creates a new array and does not mutate the original array.

2. Both functions and methods are functions, the difference is that a method is a function stored as a property inside of an object.

3. A closure is a function that is enclosed within another function, and when it is called or passed to another function it receives access to its own scope and variables and the scope and variables of the function it exists within.

4. Window binding will occur if the this. keyword is employed and no other context is explicitly or implicitly declared. This. will be applied to the context of the entire window.

Implicit binding is the most commonly used. It is used when writing methods inside of objects and you want to reference a property of that object. Appending this. to the property you want to reference, and then appending the name of the object to your method call will allow the correct context to be applied.

Explicit binding occurs in the use of functions that are not methods of an object, and so we need to explicitly declare the context using the methods .apply(), .call(), and .bind().

New binding occurs when a new instance of a constructor function is declared and the context of this. needs to also reference the new instance.

5. The super keyword on an extended class allows you to employ the this. keyword on additional unique attributes you will be assigning to your subclass.
