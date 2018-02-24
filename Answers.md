# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. .map creates a new array while forEach does not.
2. boolean, null, undefined, number, string (primitives) and object
3. 
const clo = 'sure';
function returnClo () {
  return clo;
}
returnClo(); // goes to global scope because there is no reference within returnClo's function scope when clo is referenced.
4. Four rules of this
  1- Window - value of this is the window (on computer) or console (in browser) object
  2- Implicit - this is the object before the dot when function is called  
  3- New - this is the instance  of the object that is made in a constructor function
  4- Explicit - when call or apply is used