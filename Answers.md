they seem similar on the surface, but the big difference is that foreach will run a function on each element of an array, but map will return an entirely new array with each item having been run on the function.
functions are blocks of code written to perform some task and reside outside an object.  methods are a type of function that specifically are defined inside an object or class. 
a closure is both a function and its lexical environment, which means the relevant variables.  closures are created every time a function is created and allow you to store information as you go deeper into nested functions, which will have persistent data held in memory as a closure.
rules of this keyword:
    a)implicit: points to the object on which the function is called, so whatever is to the left of the .this.
    b) explicit: when we explicity state what this is using call, apply, bind, ie what comes after call in parentheses.
    c) new: the new keyword must be used in conjunction with a constructor function for an object, so this refers to the newly created object.
    d)window: defaults to global scope. 

a super provides acces to a parent and call functions on it. 