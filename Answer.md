Your responses to the short answer questions should be laid out here using Mark Down.
For help with markdown syntax Go here

1.Describe some of the differences between .forEach & .map.
.forEach iterates over a items like in an array and does not call anything
it does apply an operation with side effects to each item (like it can save
them in a database).
.map transforms each item in an array and returns a new array of transformed
items with the same size as the original array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Boolean, Null, Undefined, Number, String, Object. Arrays are special because they have protections against indexing off 
the end and they can insert, store a new property and have store lists which objects are not meant to do. Arrays also can
push (append elements to the end), shift(get first element), pop (takes an element from the end).

3. What is closure? Can you code out a quick example of closure?
Closure in JavaScript is an inner function that has access to the outer (enclosing) function's variables, and has three scopes 
chains: its own scope {variables in here}, and the outer functions variables and has access to global variables.

 const limitFunctionCallCount = (cb, n) => {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
      let count = 0;                  // variable count to keep track of how m
      const limitCall = () => {      //  const limitCall invokes cb and uses t
        cb ();                      //   of how many times cb has been called
        count++;                   //   that cb can only be invoked n times.
    }
  };
     return limitCall;           // the variable limitCall returns the results
  };

Closure Sprint example from Sprint Challenge above. 

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time. :)
  1. If the new keyword is used when calling a function, this becomes a brand new object.
	2. If apply, bind or call are used to call a function this is the object passed in as the argument.
	3. If a function is called as a method (aka .dot notation) is used to invoke this is the object that
	the function is a property of.
  4. If a function is invoked as a "free function invocation" this is a global object(in a browser its called 
	window.
	*I had to miss this part of Ben's lecture due to a dental appointment so I got help from my O'Reilly book for this question.

