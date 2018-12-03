# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. 
.forEach - iterates over a array, modifying it in the process
   .map - returns a new array which does some operation on the original arrays elements
2.
 Object,arrays,strings, integers, booleans
Arrays are a collection of other types, also possibly other arrays.

3. 
 A closure is the added scope of an outer fuction/scope
  For Example
 ```
 function counter = () => {
     count = 0;
     function increment () {
         count++;
     }
 }
 ```

4. Javascript this can have four behaviors.
   Default Binding - not bound to any particular object or prototype, usually defaulting to window in the browser.
   Implicit Binding - bound to an object throught dot notation
   Explicit Binding - Forcing a function call to use a particular object for this binding. (Call,apply,bind)
   New Binding - When the new operator is called, this is bound the newly created instance.