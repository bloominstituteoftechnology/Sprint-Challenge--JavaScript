# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Both forEach and map iterate through an array, however the major difference is that map pushes the results into a new array usually after performing some type of method on the data. Map creates a new array, whereas forEach simply rotates through the indeces and returns the information into the same array.

2. Five types of data in JS are strings, boolean, numbers, arrays, and objects. Arrays have a multitude of methods that can be performed on them that do not exist for other data types. An exmaple would be push or pop. These methods do not exist with strings or numbers. Arrays also allow us to group data together and all of these types of data can be in different forms. We can have arrays that contain strings, numbers, and potentially objects all at the same time.

3. Closure is the concept that functions all have scope with a given block of code. The data inside of a function is only usable by the function itself, however that same function has access to all of the data outside of it. The function is enclosed in its own little box and the outside code cannot see in, however the function can see out and use variables or other data that is in the block of code.  
const counter = () => {
  let newCounter = 0;
  function IncreaseCounter() {
    return newCounter += 1;
  }
  return IncreaseCounter;
};  
Within this example, the function IncreaseCounter is able to use the newCounter variable that is defined outside the function itself because it is within the scope of the function. The outside code cannot look inside the function and see what it is doing, it can only invoke the function.

4. Outside of a function, 'this' refers globally to the window. Within a function, 'this' refers to the object to the left of the dot. When 'this' is used in a constructor function, it refers specifically to the object that is created and returned by the constructor function. Finally, when using the call or apply method, this is explicity defined within the method.