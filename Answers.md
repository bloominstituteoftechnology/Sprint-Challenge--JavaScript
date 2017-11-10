# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.


1. Describe some of the differences between `.forEach` & `.map`.
  
  A. .foreach takes a collection and applies some operation without altering the original collection. It uses the collection simply as an input. For example you could have a collection of wholesale prices and a foreach loop that would iterate through those prices multiply each one by 1.3 and save the product of each in a database. 

  B. .map, on the otherhand, takes a collection and transforms it into another collection. So for example it could take the same collection of wholesale prices and perform the same calculation but then return to you another collection with the products in it. It will return a collection of the same size with the transformed members.


2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  
  A. Object, Number, String, Boolean, and Arrays

  B. One of the things that makes arrays special is that they can hold many values under a single name.


3. What is closure? Can you code out a quick example of a closure?
  
  A. A closure is a combination of a function which has a reference to a variable outside the scope of the function.
    It is important to note that if the function will take the last declared value of the variable. an example can be seen below.

  B. An example of closure is:

  let outer = 3;
  function addTwo() {
    const inner = 2;
    return outer + inner;
  }
  // if you run addTwo() it will return 5

  // now we assign the outer variable a new value of 4
  outer = 4;

  //if we run addTwo again after assigning a new value to the outer variable it will return 6 because the function being called will look for the value of the variable closest to its scope. 


4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

  A. The 4 rules are:
  
    Principle 1: Window/Global Binding - When in the global scope, the value of 'this' will be inside the window/console object.

    Principle 2: Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.

    Principle 3: New binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

    Principle 4: Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.


