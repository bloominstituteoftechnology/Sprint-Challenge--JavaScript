# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Some of the differences in .forEach vs .map are .forEach executes a provided function once for each array element and map creates a new     array with the results of calling a provided function on every element in the calling array. 

2. Boolean, Strings, Numbers, Arrays, Functions. Arrays are high level list like objects that are global objects. 

3. Closer is an inner function that has access to the outer (enclosing) function's variable--scope chain.

function showName (firstName, lastName) { 
​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
​function makeFullName () {         
​return nameIntro + firstName + " " + lastName;     
}
​
​return makeFullName (); 
} 
​
showName ("Jonathan", "Reeves"); // Your name is Jonathan Reeves

4. a. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
   b. Whenever a function is called by a preceding dot, the object before that dot is this.
   c. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

   d. Whenever JavaScript’s call or apply method is used, this is explicitly defined.

