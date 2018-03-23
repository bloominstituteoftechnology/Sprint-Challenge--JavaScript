# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between `.forEach` & `.map`.
    The .forEach method iterates over each element of an array and does something to each of the elements.  But it return undefined.
    The .map method also iterates over each element of an array and does something to each of th elements.  But .map returns a new array while not mutating the original array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
   Boolean, string, number, undefined and object.
   An array is something that contains a list of items; these items can be a mix of strings, numbers, booleans, etc.  All data types an be used inside of an array.  Arrays are basically objects and they have special methods that an be applied to them.  An example is the .length property that checks how long an array is.  Arrays are also indexed based starting from 0.
3. What is closure? Can you code out a quick example of a closure?
    Closure is all about scope and scope can be global or local.  Scope has to do with being able to acces.  Everytime a fuction is created so does scope.  If a variable is created within a functions code block it is local, so you can't access that variable from outside the function.  But if a variable is created outside a function, it has a global scope and functions can look outside of itself to find the variable in the global scope.
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    The 'this' is an important keyword, it basically indicates what object it is referring or pointing to.  'this' basically is a fill in for an object's name, like a short-cut.
    1. 'this' in the global scope refers to the window/console Object since this is always looking for an object to point to.
    2. Implicit binding  can be spotted right away with the dot.  Whatever is left of the dot is what 'this' is referring to.
    3. New Binding works with constructor functions.  Basically constructor functions are like templates where inheritance can take place through protoypes.  A prototype can utalize the 'this' pointing to the constuctor function to be able to use its attributes.
    4. Explicit binding utilizes .call, .apply and .bind.  Explicitly calling these properties will let you get the attributes of that object it is referring to.
