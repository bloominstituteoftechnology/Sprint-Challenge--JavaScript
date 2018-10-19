1. Describe the biggest difference between .forEach & .map.
.forEach doesn't actually return any values, it just performs an operation on each element of an array. Whereas, .map actually returns a new array of the same size, which reflects the array after an operation was performed on it.

2. What is the difference between a function and a method?
A function is a piece of code that is called by name (or anonymously as well). All data that is passed to a function is explicitly passed. A method is a piece of code that is called by name but it is associated with an object (i.e. .map & .forEach are associated with an array object). Data can be explicitly passed to a method, but also implicitly by the object the method is associated with.

3. What is closure?
A closure can be seen as an inner function that has access to an outer, or enclosing, function's variables. A closure allows a function to access values that are declared 'locally' inside the enclosing function. The scope of a closure is defined as lexical, meaning that it's defined statically by the function's location within the code.

4. Describe the four rules of the 'this' keyword.
The first 'this' refers to the global scope.

The second rule is when 'this' is impicitly defined. 'This' refers to the specific scope that it is in when you invoke a method 'i.e. dog.bark() 'dog' implies the 'this' keyword of the .bark() method would refer to dog'.

We can use bind to hold the 'this' keyword for later use. By binding it, we make the 'this' keyword point to a specific object and then store that value until we need to use it later.

You can use .call() or .apply() method to explicitly state what the 'this' keyword refers to.


5. Why do we need super() in an extended class?
