# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)




## Question 1: Describe some of the differences between `.forEach` & `.map`.


The difference between .forEach and .map primarily exists in regards to transformation of the original array and whether or not a new array is created at all. .forEach will transform the original array by invoking a callback function for each element in the array, and returning the original array with the transformed elements, whereas, .map will also invoke a callback function on each element but will store those transformed values in a new array, essentially leaving the original array in tact.





## Question 2: Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?


5 Types: Number, String, Boolean, Null, Undefined.


Arrays are special because they act as a data *set*, allowing us to manipulate the data in ways that can yield more meaningful results. Technically, this is possible because of the global Array object containing a large number of built-in methods to iterate over and manipulate data.




## Question 3: What is closure? Can you code out a quick example of a closure?


A closure is essentially a containing environment for reference to data and local variables in relationship to other global functions, variables, etc. And of course I can!!!


function localFunc(adj) {
    const name = 'Daniel';
    console.log(`{$name} is ${adj}') // Logs Daniel is ${adj}
}

console.log(name); // Logs nothing because name is locally stored to localFunc


## Question 4: Describe the 4 rules of the 'this' keyword


the 'this' keyword can be used to bind properties and property values to an object depending on the context in which it is invoked. The four fundamental uses of this are implicit binding (dot notation), explicit binding (using .call or .apply), Window binding (generic reference to the global window object), and new binding (binding to the specific new instance of an object created by the new keyword.)