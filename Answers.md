# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

 ## Describe some of the differences between .forEach & .map.
  forEach loops through the array but returns the same array.  .map loops through the array and returns a new array.
 ## Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
 string, bool, int, char, arrays.  Arrays are able to store any type in themselves even other arrays 
 ## What is closure? Can you code out a quick example of a closure?

 close is the ability to access code from inside the function that was written outside the function. 

 var time = 6; 

 function timer () {
   var timers = time++;

 }

 console.log(timers) // should log out 7
 
 ## Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

 implicit explicit new and window

 window connects this to the window it is working in the overall container or object. 

 new connects this to the new object itself. 

 implicit belong to the object that is invoking the function. 

 explicit has this refrence what he .call property is used on.

