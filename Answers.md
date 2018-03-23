# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1.      The main difference between forEach and Map is that forEach will override the original array, whereas map will create a            new array to hold the results of the function. 
2.      (1) Objects
        (2) Arrays
        (3) Booleans
        (4) Numbers
        (5) Strings
        What is special about arrays is that they provide a way to store data in a stored manner. Unlike the other data types, arrays have indexes built into them which allow us to not only store data, but easily identify and return specific items by using a wide array (pun intended) of functions. For example, we can use a for loop to iterate over every item in an array, or we can use the filter function to return a sub-population of an array. 

3.      Closure is related to scope, and how variables outside of functions interact with variables called inside them. In                 Javascript, a variable may be declared "globally," so that it can be referenced in functions that are created later on,            without having to re-declare the variable each time. 

4.      "This" is a keyword that points to an object, and is assigned based on when "this" is invoked.
        
        The 4 types of "this" bindings are: 
        (1) Explicit binding - these bindings explicity bind "this" to an object, and overrides the implicit binding typically                            used. Explicit bindings can be made with .call, .apply, or .bind.
                                (a) function.call(object, argument1, argument2...argument n) accepts an object which will be explicitly assigned to the this keyword inside the function. Anything passed after the object can be accepted into the function as an additional parameter.
                                
                                (b) function.apply(object, array-of-arguments) accepts an object to explicitly bind "this" to, just like call, but the array that is passed will send all the arguments inside the array to the function without us having to type out each argument manually. 
                                 
                                (c) function.bind() acts in the same way as .call, but creates a new function entirely.

        (2) Implicit binding - these bindings implicitly bind "this" to an object directly, based on how "this" is stored. If                             stored within an object, "this" is implicitly bound to that object, whereas if an object is invoked,                       "this" will be bound implicitly to the object directly to the left of the keyword.
        
        (3) Global/Window    - if no binding is made to "this", it will assume the global binding of the javascript window, which                         is the object that contains all of the content on the page. 
        
        (4) New              - when a new object is constructed, "this" will be bound to the new object, not the object                                   constructing the new object 