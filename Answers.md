## ANSWERS:

1. The biggest difference between forEach and map is that map returns the results in a new array.
2. A method is a function that exists inside of an object.
3. A closure is created when a function is invoked and uses a variable from an outside function. Closure is created to store the the value of that variabale for the invoked function.
4. this:

a. Implicit Binding: happens wehn a method is invoked on an object. The this keyword is bound usually by dot notation. Whatever is left of the dot is being bound to this.

b. Explicit Binding: occurs on functions. this is set overtly (explicitly) with one of three function methods: call(), apply(), and bind().

c. new Binding: This binding occurs when a new instance of a constructor object is created. The new keyword sets up and instance of this and sets it to an empty object that the newly created constructor object is then assigned.

d. Window Binding: is the default context of the this keyword. this will reference the window unless it is bond in another way.

5. We need super() in the extends class because it calls the constructor of the Parent inside the constructor of the Child so in order to passdown it's properties and set the this keyword to the child.
