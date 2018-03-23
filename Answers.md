# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map. 

The foreach method is a built in callback function that iterates through an array or object to simply return all of the values. It's used to see what all is in the array or object, it doesn't necessarily return the items in a desirable format. The map function is a built in function that iterates through an array to replace existing values with new ones. For example, each place holder within the old array will have a place holder for an item in the new array. You can iterate through values with a math funciton or change the actual values any number or ways. If you only change some of the values, some of the old values can remain in the new array.  

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Five different data types in JavaScript include numbers, 'strings', Boolean values, objects, and arrays. Arrays are special because you can iterate over them which is a base function in many many function key words build into JavaScript.

3. What is closure? Can you code out a quick example of a closure?

Closures are JavaScripts special built in functional ability to access variables through and outside of a function without directly passing in the specific variable arguments needed for those functions. 
Ex: 
let you = 'Special One'; 
function goodMorning(){
    console.log('Good morning, ' + you + '!')
}
goodMorning(); 
    
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

The 4 rules for 'this' refer to instances of binding to a variable for the evocation of a function.
    1. Window binding is the default binding of 'this' where no other method is evoked. Here, the 'this' will likely refer to the operating window you are coding in or return an error. 
    2. Implicit binding is often used to refer to a specific key word value within an object or nested object. It is called by referencing the key word directly before the '.' when called.
    3. New binding is used to create instances of specific objects with constructors, where 'this' defines and binds the new instance. 
    4. Explicit binding is calling a function and passing in specific variables or arrays. There are 3 subcategories: .apply, .call, and .bind.  
