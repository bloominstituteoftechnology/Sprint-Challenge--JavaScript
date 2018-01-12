# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between `.forEach` & `.map`.

Some of the differences between .forEach and .map are: 
**1.**  .forEach alters the original array. 
**2.**  .forEach always returns undefined.
**3.**  .map creates a new array with the results of passing each element in the array through a given function.
        This means that there is a new Array, and the original is left unaffected. 

### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Five different Types in JavaScript are Strings (''), Numbers (0), Booleans(True/False), Objects({Key: Value}), and Arrays []. Arrays are so special because they can hold any data type.

### 3. What is closure? Can you code out a quick example of a closure?

Closure is when there is a function within a function. So basically, it is a function that operates underneath a parent function. Example:

let mailBox = (mail) => {
  console.log(`Awaiting address and your mail will be shipped!`);
  function addAddress(address) {
      console.log(`Your ${mail} will be sent to ${address}.`);
    }
    return addAddress;
};

let santasList = mailBox('Naughty or Nice List');
santasList('The North Pole')

### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

The four rules of the 'this' keyword are: 
**1.**  Values contained in Global Scope will have a 'this' of the window object. 
**2.**  The object preceeding a 'dot' is this. Ex: thisIsTheThisObject.function.
**3.**  When involving constructors, this refers to that particulair instance.
**4.**  If using call, or apply, this is explicitly defined. 