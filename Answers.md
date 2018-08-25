1. Describe the biggest difference between .forEach & .map.

The biggest difference between .forEach and .map is that .forEach doesn't allow for return in its function call. Also, .forEach also works on the same array. .map requires a return in its function call. It also returns and works with another array that is created.

2. What is the difference between a function and a method?

It could be said that all methods are functions, but not all functions are methods. A function is used like a machine that allows input (but doesn't have to), and gives back an output that is created through a certain number of steps. A method is a function that is applied directly to a certain type of item, like an array, that can be used over and over again.

a function that sums two numbers x and y can be created. function(x,y) {}. A method can be created though that can sum an entire array.

Numbersby10.sum()
ticketSales.sum()

3. What is closure?

Closure deals with three types of scope. It is a function within a function that has access to its own variables. It also has access to the outer function's variables. Furthermore, it has access to the global scope of variables. It is the ability for an inner function to access variables and items in both the local and global scope.

4. Describe the four rules of the 'this' keyword.

There are four different ways to use this.

The first way considers Window. When there is no direction to guide the this word, this refers to the main global object, the Window.

The second way refers to the new keyword. Whenever another instance of a class is created using new. This refers to the new instance that was created.

This used implicitly refers to when an item uses . notation to invoke a method or item. obj.name or animal.growl() is an example, where animal and obj are the context which this refers to.

When this is explicit, it is used when the methods of call,apply, or bind are specifically used to set the context of this. speak.bind(user). user is the context this is referring to.

5. Why do we need super() in an extended class?

super() links the parent class properties to the child class. Without super(), the child class could not gain access to methods and functions of its parent class. 