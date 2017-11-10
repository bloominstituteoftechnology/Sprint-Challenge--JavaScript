# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
### Markdown reference http://commonmark.org/help/

* Describe some of the differences between `.forEach` & `.map`.
   ref https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

   A map takes a list usually an array and runs(maps) a function or each element of that array. On each
   iteration remember to return or else you will have an array of undefined elements. Maps returns a new array
   when finished iterating.
   Like map forEach saves you having to manage iterating through the a loop, for each does not return anything on each iteration so you can't chain it onto other functions. Map returns an array but forEach requires you to update or mutate the array you are managing in the forEach and declare it before the forEach loop

* Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

   number, string, boolean, object, undefined, null. Arrays are special cause Ryan said so :), but also because
   they are simple to implement and if sorted have a lookup time of 0(log n) which is fast. Arrays also have a lot of very useful prototype methods attached to them.

* What is closure? Can you code out a quick example of a closure?
  Answer heavily referenced from book you don't know js (https://www.gitbook.com/book/maximdenisov/you-don-t-know-js/details). The book is free.
  A closure is a way to remember and continue to access a functions scope even if the function has finished running.

  function adder(x){
    // x's scope is here

    function add(){
      return x + y;
    };
    return add;
  }

  let addOne = adder(1);
  addOne(10); // 11,  here  addOne is reference the add function which still has acces to the x variable

* Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

https://medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9  
First of all what is the meaning of 'this' in javascript. this refers to the context or scope of a property
or function at the time it is called or invoked. the four rules of this are
1. Implicit binding : A function defined in a class and once instantiated the this refers to the objective.
   Look to the left of the dot
2. Explicit binding : where you set the context or association of a mentod with an object using call    (executes  immediately), bind (list arguments), apply (uses an arry or arguments)
3. New binding : whenever a class is instantiated with a new operator this is bound to the new object. eg let dog = new animal ; dog.bark();
4. Window or console binding. If none of the rules above apply then the function is bound to the global object. 
