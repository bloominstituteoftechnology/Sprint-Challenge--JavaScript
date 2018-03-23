# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. .forEach runs a function on each element of the array.  .map runs a function on each element of the array and assigns the result to a new array.</p>
2. float, int, string, array, object.  Arrays can hold a list of items of any time.
3. Closure:  a global variable can be used inside a function.  a local function cannot be accessed outside of the function it was defined in.
..* let v = 5;
... function someFunction() {
...     let b = 2;
...     console.log(v); // this will log 5
...     console.log(b); // this will log 2
... }
... console.log(v); // this will log 5
... console.log(b); // this will log undefined
4. Four rules for "this"
..* Window/Global:  returns the console as the object
..* Implicit:  this.functionName, the object proceeding "this." is what "this." points to.  .this is <- THAT
..* New Binding:  Used in constructors to assign property values to the object being constructed.
..* Explicit:  .call .apply and .bind are used on functions to assign values based on array items (.call is for single data types)