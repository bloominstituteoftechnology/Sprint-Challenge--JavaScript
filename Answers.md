1. forEach() does not return anything it excutes a function for each array item mutating the called array. map() does the same as forEach() however, it will create a new array in the proccess and put the return values into the new array.

2. A method is a function that is part of a object or class, functions are the same as methods but they are not a property of a object.

3. Closures are functions inside of other functions. They have access to the outer function (parent) scope chain. Closures can access their scope, parent function scope and global scope.

4. 1: Window Binding
When scope is global 'this' is the object of the window which is the object that is in the browser.

   2: New Binding
'This' refers to the new object created when using a constructor function.

   3: Explicit binding
Whenever apply or call is used this means that the object is explicitly defined.

   4: Implicit binding
Used with dot notation to invoke a function, this refers to the variable in the object its referencing.


5. Its used to call functions on the parent object. Similar to the prototype.