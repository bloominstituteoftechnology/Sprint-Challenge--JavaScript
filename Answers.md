1. Describe the biggest difference between .forEach & .map.

.forEach iterates over each item in an array and performs a task for each item individually. .map transforms an array and return a transformed array.

2. What is the difference between a function and a method?

A function is an equation that can take variables as inputs. A method is a type of function which is applied to objects and takes predefined variables and properties from that specific object. A function applies to the window whereas the scope of a method is the object instance it's applied to.

3. What is closure?

A closure is a function within another function which has access to the variables within the outer function.

4. Describe the four rules of the 'this' keyword.

    1. Window binding: This is where the "this" keyword is not bound to anything specifically so it applies to the window.
    2. Implicit Binding: Whatever is directly to the left of the "this" invocation is the this keyword context.
    3. Explicit Binding: The "this" keyword is referenced to a function using .call, .apply, or .bind.
    4. New Binding: An empty object is created as a reference for the "this" keyword, and the object is then linked to the constructor.

5. Why do we need super() in an extended class?

super() calls the object parent allowing the child to inherit methods and properties.
