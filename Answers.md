# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1.  .forEach() performs a function on an array but doesn not return anything so while .map() will create
    a new array based on the function provided.

2.  String, Number, Boolean, Array, and Object
    Arrays can Store other data types like strings, numbers, booleans, and objects and keep expanding even while being a const. On top of that, there are methods that allow the contents of an array to be manipulated so accessing data is convenient

3.  Closure is a way of passing a private variable only changeable by calling the function assigned when passing that private variable. hehe very poor wording sorry
    ex:     const count = () => {
                let counter = 0;        //passes the hidden variable counter
                return () => {          //assigns the function to change the variable
                    return ++counter;
                }
            }

4.  window - when 'this' is written in the global scope, the object it refers to is the window (object)     directly containing it. therefore using this.<property> allows it to use the window's properties

    new - when making an object based off an Object like Array String Number or a class, 'this' will be bound to the scope of that new object 

    implicit - when a class constructor assigns its properties using 'this', it is implied that the scope 'this' has access to are only the properties that are part of the created object and will not access any properties outside of the given scope

    explicit - in functions designed to be reusable regardless of object, 'this'is used to take in the current obj's properties. in order to make it reusable, the function is usually used with a .bind, .call, or .apply to  gain access to an obj's properties so that 'this' has the properties within its available scope.