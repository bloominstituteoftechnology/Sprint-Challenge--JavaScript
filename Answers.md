# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

 1. Differences between __.forEach__ and __.map__ :

    Both are array methods. 

    __.forEach( )__ doesn't return anything. It calls a provided function on every element in the array.

    __.map( )__ also calls a provided function on every element of the array. The difference is that _map( )_ utilizes the return values and actually returns a new array of the same size.

 2. 5 different types in JavaScript. What is Special about Arrays?
    1. Boolean
    1. String
    1. Number
    1. Null
    1. Undefined

    Special about Arrays: 
        A JavaScript array created with the **Array** constructor is initialized with the given elements, except in the case where a single argument is passed to the **Array** constructor and that argument is a number.
        It is not created for array literals.



 3. What is Closure?
    Function inside another function is called closure. A inner function that has access to the outer function's variables - scope chain. 

    3 scope chains are: 
        1. It has access to its own scope.
        1. It has access to the outer function's variables and its parameters.
        1. It has access to the global variables. 

    Example:
     

            const counterMaker = () => {
                let counter = 0;
                return () => {
                counter ++;
                console.log(counter);
                };
            };
            const counFunction = counterMaker();
            countFunction();
            countFunction();
            countFunction();
            countFunction();
        The result of this above example would be :

        1
        2
        3
        4

 4. Four rules of __"this"__ keyword :

    1. Whenever a function is contained in the global scope, the value of _this_ inside of that function will be the window object. 

    1. Whenever a function is called by a preceding dot, the object before that dot is _this_.

    1. Whenever a constructor function is used, _this_ refers to the specific instance of the object that is created and returned by the constructor function. 

    1. Whenever Javascript's call or apply method is used, _this_ is explicitly defined.
