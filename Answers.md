# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. Describe some of the difference between foreach and mapping
* for each will iterate through an array and only manipulates the same array as for .map it will iterate through an array and call a callback function for every element in the array and if the element returns true it will be placed in the new array, once its done iterating through it will return a new array.

# 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
* numbers; they are great because they allow you to do math calculations.
* strings are a great data type because then you can make data human readable.
* arrays are special because they allow you to store related data in a data block and iterate through it and manipulate it by indexing.
* Boolean data types are a great data type because now you can check whether something is in a stored data block or undefined now i know you can just use 1 and 0's but true, false and undefined just make it a bit more intuitive.
* objects have got to be my most favorite data type because now you can create a variable _object_ that can store related properties of that object, and then you can go on and create a _child_  of that property but creating a new object and having it inherit the ancestor objects properties that way you wont need to retype all the same properties and methods which saves production time, and allowes you to focus on adding new methods and properties to your _child object_.

# 3. What is closure? Can you code out a quick example of a closure?
* a closure is a function with another function within its parameters that can be called after your containing function has run and then that callback function can go ahead and do some other magic and return the value of something

# 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
* implicit binding happens when you call *this* within your containing object
* explicit binding is when you have to first import a function that has the this object within it by using a .call, .apply, or .bind method, to have the object inherit the function
* the new binding; this will reference the newly created object.
* the window binding; this will reference the window object if it doesnt have any other object as a container or parent
