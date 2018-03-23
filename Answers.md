# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
Describe some of the differences between .forEach & .map.
----

-  forEach dose not return anythig to the caller, instead it just loop over the array. 
-  map returns a new array after some action on the array it was called to, it returns a new array excetly of same number of items inside the original array. 


Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
----

- Boolean-->  true or false;
- Null --> represents nothing or emptyness. 
- Undefined --> if something is declared but yet to be instantiated(no value set yet);
- Number--> any real number decimal, float, integer, binary, hex etc. 
- String--> values within quote are non-mutable string data, eg.  'Imran', '123' etc.

Arrays are objects with mutability, they are comma separated collection of data types, with heterogeneous data acceptance. They have special methods in Js, like length, push, pop, shift and unshift, slice, splice...


one special thing I found about array that they are called ***by reference*** in contrast to primitives(numbers). Meaning if we pass an array to a function and modify it, the original array will be mutated. Or in other words, we can say when we pass them we actually pass the memory address where they are located, so if the array is changed or modified, the original array is being modified. 


What is closure? Can you code out a quick example of a closure?
----
closure is when we return a function from within a function,and the variables required for the returned function is kept in its execution context, for future use. eg..

function outer(params) {
let x  = params; 
  return function(){
    console.log(x);
  }
}

let closureExample = outer(10); 
console.log(outer()); 

here in above example it may seems that the scope of the variable x is outside of the returned function stored in closureExample variable. 
But when we call the closureExample to invoke the returned function it will console log 10. because of closure this variable x with its value is kept stored inside the execution context of the returned function by closure. 
 

Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
----
this keyword maintains 4 different scopes.

*  Global Scope
in global scope the this keyword points to the global object in system it is windows object and in a browser its browser object. 
if we have not binded the object to any other object implicitly its this scope will be the global. 

*  Implicit binding scope
implicit binding is when we invoke this keyword within a method of any object. In this case every first child method, its this will point to the object itself. 
if we have any inner object inside a object the this points to the global object. 

*  Explicit binding scope 
Explicit binding is when we use call , apply or bind to any function. we define what the this keyword will point to in the first parameter of call, apply and bind. 

*  New keyword binding scope
this is when we use a constructor function to create new objects, and then, this keyword points to the new object being created.