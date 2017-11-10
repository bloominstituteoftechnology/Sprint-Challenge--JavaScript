# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
##1. Describe some of the differences between `.forEach` & `.map`.
*`.for each()` is a method that calls on a provided function once for each element in an array, and its in order.
*`.map` creates a new array with the results of calling a function for every element in an array, in order.

Both go over each element in an array and in order but map creates a new array when calling a function and forEach just goes over it once not creating a new array.

##2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
*String - text
*number- intergers
*boolen - two values either its true or false
*object -collection of properties
*null - will give you null and only null value


##3. What is closure? Can you code out a quick example of a closure?
Function name(firstName, lastName){
  const intro = 'Your name is';
  function wholeName() {
  return intro + firstName + " " + lastName;
  };
  return wholeName ();
};


##4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

*Window/ Global binding - when in the global scope, the value of 'this' will be inside the window/console object.

*Implicit binding- whenever a function is called by a preceding dot what ever is to the left of the period.

*New Binding- Whenever a construtor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

