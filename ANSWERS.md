# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between these two methods is that use of .map will create a new array of elements that have been manipulated in some way, forEach does not create a new array.  .forEach applies a function to each element in an array while maintaining the original array structure.  .map is usually used to make a change to all of the elements, such as a conversion between units of elements.  The mapped data then would become a new array. 

2. What is the difference between a function and a method?

"Function" is a more general term to describe an operation that executes commands while a method is a function that is attached to an object. 

3. What is closure?

Closure is related to the scope of an object that has been defined in JavaScript.  For example, with no defined context, the scope of an element, say "const = 'hello'" is defined within the scope of the entire window.  As elements become nested within functions/objects etc. they become bound, or limited to a smaller enclosure and cannot reach into other enclosures.  However, JavaScript is unique in that elements may reach outward to objects that have been defined in the broader scope.  This does not work in the other direction, though, that is if a variable is defined within a function, it cannot be accessed from outside of the function.  The concept of containing objects within smaller scopes (objects, functions, arrays) is the thing we refer to as closure. 

4. Describe the four rules of the 'this' keyword.

In general, 'this' needs to be connected to something that is defined within it's lexical scope (it's immediate surroundings).  The four principles have to do with what 'this' is connected to and how that connection happens. 

Window/Global binding is the most basic rule in that is simply states that 'this' will be bound to the entire window if no smaller context is defined.

Implicit Binding involves calling a function with a preceding dot.  the object before the dot is 'this'.  The context for 'this' will depend on the object that is passed into the function.  

Explicit Binding involves the use of JavaScripts .call or .apply method.  In contrast to implicit binding, 'this' will be stated specifically rather than following whatever object is passed into the function. 

New binding happens along with the use of constructor functions (which create objects). 'this' will then refer to the specific instance of the object that is created and returned by the constructor function. 


5. Why do we need super() in an extended class?

We use the super keyword when we want a child object to have the same attributes/options/methods as it's parent.  The super is a keyword in JavaScript that is used to access and call functions on an object's parent. When used in a constructor, the super keyword appears along and must be used before the 'this' keyword. 
