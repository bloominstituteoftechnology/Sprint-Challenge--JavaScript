1. forEach mutates the array while map inherently makes a new array which does not mutate the original array.


2. a method is a function found in an object.

3. When an inner function has access to variables that Is defined outside of its scope.

4. window binding - if invoked in the global variable, this will be bound to the window/console object.

New binding - when new is called, properties next to the this keyword in the constructor function (which represents an object) is bound to the new object being constructed. 

implicit binding - the this is bound to the left of the dot when it is called. The object before the dot is this’ context

explicit binding - when the call or apply is used, whatever is being passed in will bind the this keyword to that. As if you are literally dragging them together.

5. Super binds whatever is being passed into the constructor to be bound to its parent properties and it hides other syntax that was used to bind things to parent and child. Why? It does the what Object.create() does but easier and is more straitforward.