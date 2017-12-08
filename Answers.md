# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between `.forEach` & `.map`.
.forEach executes the callback for each element in the array in ascending order.
.map calls a provided callback function one time for each element in an array in order and creates a new array from that.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays? Number, String, Boolean, Undefined, and Arrays. Arrays can hold a list of data and nest other arrays within themselves.
3. What is closure? Can you code out a quick example of a closure?
 Closure is when you associate data with a function that operates that data.
 
 let number = 0;
  return () => {
    number++;
    return number;
  };

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time
the four rules are global binding, implicit binding, explicit binding, and calling constructors with new