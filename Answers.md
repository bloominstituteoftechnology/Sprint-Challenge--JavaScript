# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.

    .forEach will iterate over an array and execute an operation on each item in that array while .map will iterate over an array and pass each item through a transformation function, returning a new transformed array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

    Boolean, null, undefined, Number, String.  Arrays can store multiple values within a single variable.

3. What is closure? Can you code out a quick example of a closure?

    Closure is a function's ability to access other variables that are within it's scope chain.  An inner function has access to it's own variables, the outer encompassing function's variables, and variables declared on the global scope.

   let place = 'Los Angeles';

    function sayHi(firstName) {
        const greet = `Welcome to ${place}, I'm`;

        function addName() {
            return `${greet} ${firstName}`;
        } 

        return addName();
    }

    console.log(sayHi('Claudio'));

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

    a. Window Object Binding - 'this' is value of window object in global scope.

    b. Implicit Binding - within an object, 'this' refers to the object when a function is called with a preceeding dot (ex. this.name)

    c. New Binding - when using constructors, 'this' refers to the instance of the object that is being created and used by the constructor.

    d. Explicit Binding - when using .call or .apply methods 'this' is explicitly defined. 

