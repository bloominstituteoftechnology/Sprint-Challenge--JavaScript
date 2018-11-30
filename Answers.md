1.) Describe the biggest difference between .forEach & .map.

forEach() is a void method, which means it does not return anything. map() is as method that can return an object for each item in the collection, making it generally more useful than forEach for transmitting data to a new collection.

2.) What is the difference between a function and a method?

A method is a function that exists in the scope of an object. A function may exist on its own.

3.) What is closure?

Closure is the use of declaring symbols relatively to a function's *declaration* which allows a function to access it, even beyond the scope of the object that originally contained the symbol.

4.) Describe the four rules of the 'this' keyword.

'this' is a keyword that represents an object based on the lexical scope of the execution stack. The four rules of 'this' are global binding, implicit binding, constructor binding, and explicit binding.

Global binding happens only in the case where 'this' isn't bound to anything else- it is bound to the global scope, commonly the 'window' of the JS application.

Implicit binding refers to code executed inside an object, such as methods. 'this' refers to the instance of the object containing the code.

Constructor binding refers to code specifically used to generate new objects. 'this' refers to the object being created, often used to initialize new properties.

Explicit binding is the use of function.prototype.call() and function.prototype.apply(). These methods are able to specifically bind 'this' to an object of the programmer's choice. Any references to 'this' in the function will then point to the object specified in the method.

5.) Why do we need super() in an extended class?

super() calls the constructor of the superclass, or the class that the current class extends from. This is relevant, and is not automatic because the constructor arguments of the superclass need to be accessible by subclasses to allow finer control of inheritance.
