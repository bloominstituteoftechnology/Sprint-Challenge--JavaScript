# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/a1dam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .forEach executes a function for each item in an array and doesn't create a new array. .map does the same, but returns a new array with the functions executed on each item.

2.  Strings, numbers, arrays, objects, functions(?), variables(?). Arrays seem special to me due to their large amount of built in .prototype methods, such as .forEach and .reduce. They seem to lend themselves to be easy to loop over.

3. Closure is the concept that you can access information (specifically variables?) from outside a function in javascript. This is because the function will "search" for the variable until it hits the global window.
Example:

var imGlobal = "Global boi"

function wheresGlobal(){
    console.log("heres global: " + imGlobal);
}

wheresGlobal();

4.
    1. Global .this, where if used not within an object gives the closest object, which would be the global window. (is this a correct way of thinking about it?)

    2. Used with dot notation, i.e Implicit Binding. 

    3. Used with the new keyword, as a constructor function.

    4. Used with .call or .apply. (Not sure of the differences between 3 and 4, as don't you need to use the new keyword to be able to use jerry.speak.call(newman) in the example?)

    