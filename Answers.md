<<<<<<Answers>>>>>>>

1. Both '.forEach' and '.map' are methods that perform a function on every item in an array. The difference is, '.forEach' doesn't return anything unless you give it instructions to do so, while '.map' returns a new array with the results of running that function on each item in the old array. 
2. A function is an operation that you can just call by itself. For example, return the time to the console. A method is basically a function that applies to an object, and is invoked by an object. So a method is basically an ability of an object. You can't call a method without attaching it to an object. 
3. Closure is a function nesting variables inside brackets inside of a function, which makes them inaccessable from the global scope. It's a way of "protecting" variables.
4. The four principles of "this"
    a) Window/ Global binding- When we aren't inside of a function, "this" refers to the Window object itself.
    b) Implicit binding - When an object calls a function, the context of "this" becomes the object that made the call.
    c) New binding - When we use a constructor to create a brand new object, the context of "this" would be the object that is instantiated, as opposed to within the constructor function that created it. 
    d) Explicit binding- we use the call and apply method to change the context of "this" to whatever object we fed in as an argument.
5. We use the super keyword when we call a class constructor, so the child will inherit the parameters of the parent class.
