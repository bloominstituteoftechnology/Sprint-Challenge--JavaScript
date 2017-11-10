# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach and .map
  The most noticeable difference between .forEacha and .map is that .forEach does not return a new array. It returns undefined every time it is run. By comparison, .map returns a new array. Both methods take identical parameters: a callback function, which itself takes currentValue and additional parameters (index, array, thisArg). Neither method inherently changes the array upon which it is acting (though the callback function it is performing may do so). 

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  a. boolean
  b. integer / int
  c. string
  d. decimal / float
  e. object / array
  An array is an object. An array is special because it is an ordered collection, whose elements are stored in an optimized way. The result is that so long as arrays are treated as ordered collections, they work very fast. Arrays can be misused by creating non-numeric property names, leaving gaps between properties arr[0], arr[1], arr[100] with nothing between them, filling in the array's properties from high to low (starting with arr[350] and working your way down). Arrays are special because they are objects that have ordered data and have specific methods to handle ordered data. They can be treated as a queue (shift, push [FIFO]) or like a stack (pop, push [LIFO]).


3. What is closure? Can you code out a quick example of closure?
  Closure is a process by which information is shared between or withheld from other parts of the code in programs. Consider a straightforward example of concentric circles. Anything held in the largest circle is accessible by the smaller circles within it. Information stored by the smallest circle is available only within that smallest circle. 
  The smallest circle is going to start, when being asked to locate a piece of data, by looking within itself. It will then move to the next largest circle, and then each circle outside of that in order to locate the information requested. 
  ```javascript
  let problems = 99;
  const butAB = () => {
      let aint = 1;
  };
  ```
  In the above example we have two variables and a function. One variable is declared outside of the function. This variable, problems, is available outside of the scope of the function, and is also available within it. The second variable, aint, is declared inside of the function. The function, butAB, is now our smallest circle from my above metaphor. Function butAB is able to pull in problems and use aint. Outside of that function, problems is still accessible, but aint does not exist outside of that function.

4. Describe the four rules of the 'this' keyword. No need to provide examples at this time.
  a. Window/Global binding - 'this' has a value that is inside the window or console object 
      'this' and 'window' are literally interchangeable. 'this' refers to the window or global object, which is an actual object that houses the entire window
  b. Implicit binding - object preceding a dot (when calling a function) becomes the value of 'this'
      When I call a function on a specific object [ex: myDog.getsOlder();] the object [myDog] becomes the value of 'this'.
  c. New binding - with a constructor function. Specific instance of object created/returned by C.F. is value of 'this'
      If I create a new object and call a constructor function [ex: const fido = new Dog();] that object [fido] becomes the value of 'this'
  d. Explicit binding - .call() or .apply() methods are used, the argument sent to that method is the value of 'this'
      If I call a method on an object, but use the .call() or apply() methods and send in an object variable [ex: myDog.saysWoof.call(otherDog);] the object argument that is sent [otherDog] overrides the initial object [myDog] and [otherDog] becomes the value of 'this'