# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#*Questions*
1. Describe some of the differences between .forEach & .map.
···Both iterate over arrays but they have different behaviours: .forEach makes use of the referenced function once for each element in order (left to right) in the array, but does not change the rray and doesnt return anything. With .map the whole array is mutated and passed into a new array, applying the provided function.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
···First: *Boolean*, it can only have two values, true or false, 1 or 0, etc.
···Second: *String*, anything written between quotes.
···Third: *Number*, any numeric data type.
···Fourth: *Null*, an invalid object, nonexistent.
···Fifth: *Object*, is a data structure used to work with the data given.
···*What is so special about arrays?*, they are capable of storing multiple values inside of a single variable, something not possible to normal variables. You are able to access this values by following a numeric index.

3. What is closure? Can you code out a quick example of a closure?
···Closure refers to the scope of an inner function. It means an inner function can acces it's own scope and the outer function variables and parameters.
··· ```Javascript
       function outerFunction(parameter) {
        let ar = "Your argument is";
        function innerFunction() {
            return ar + parameter;
        }
    }
    outerFunction("my argument");
    ```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
···*Implicit Binding*, any object before the dot (to the left of the dot) when a function is called, becomes *this*.
···*Explicit Binding*, when the method bind, apply or call is used, *this* is defined by it.
···*Window Binding*, when there is nothing for the *this* to reference, the default will default to the window object.
···*New Binding*, in a constructor, whenever there is a new object constructed, the created object becomes *this*.