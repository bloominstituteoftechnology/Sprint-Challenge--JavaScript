# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
both .forEach and .map traverse through an array. forEach executes the cb function for element in the array, but map creates a new array with the result. 


2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Arrays, object, string, number, boolean.

Arrays store string, number, arrays and objects, it has index and value. you can access the value of a data using its index. 


3. What is closure? Can you code out a quick example of a closure?
It is an inner function that has access to an outer function variable. 

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
const myCounter = counter();

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

Window or global object binding, Implicit binding,  Explict binding and  New binding