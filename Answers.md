1. Describe the biggest difference between .forEach & .map.

The biggest difference is that .map() method returns a new array with each element being the result of the callback function, but .forEach() method returns undefined and any changes made to the array’s element as a result of the callback in a .forEach() method, changes the original array.

2. What is the difference between a function and a method?

A function is a 'subprogram' that can be called or invoked by code. A method is a function that belong to an object that makes invoking a method involved accessing the object where the method belong.

3. What is closure?

According to MDN web docs, A closure is the combination of a function and the lexical environment within which that function was declared. Thus, when a function is invoked, any local variables that were in-scope were preserved in a closure so that it's inner function will still have access to these variables.

4. Describe the four rules of the 'this' keyword.

- Window binding: the default binding when no other binding is made.
- Implicit binding: the method binding that happen when the method is being invoked. 'this' binds to the object to the left of the dot (or left bracket) of the function being invoked.
- Explicit Binding: It is when .bind, .call, or .apply is used to explicitly bind a function to an object.
- New Binding: It is a binding created using the 'new' keyword when creating new object.

5. Why do we need super() in an extended class?

We need to super() in an extended class in order to have access to (inherit) parent's props and methods. Without super() we won't be able to use this keyword to access inherited props and methods from parent object.
