1. The main difference between foreach and map is that foreach moutates the original array and does not return anything back to che caller.
and map does not mutate the original values but returns a synthesized new array to the caller. The bothe ittreate over an array and 
they both perform a function on each itterated item in the array. another difference is performance map is far more performant than 
foreach in the implementations as they stand

2. The main difference between a function and a method is that a function is outside of a class / structure 
and a method is defined inside a class. In object orientated programming (OOP) 
this means that a method is a function that is associated with an object.

3. a closure is an inner function that has access to the outer functions variables 
scope chain. there are 3 scope chains that a closure has. It has access to 
its own scope, the outer functions variables scop and also the global variables. 
This can be a very poerful thing for a programmer. the scope of a closure is 
very useful for synthesized values and to keep a variable live even after it 
seems like it goes out of scope.

4. the 4 rules of the this keyword are as follows:

* Whenever a function is in the global scope the this keyword refferes to the window object.

* Whenever a function is called by a dot notation, "this" reffers to the object before the dot.

* Whenever a constructor function is used, the specific instance of the object that gets returned by the constructer function is "this".

* The "this" keyword is explicitly defined then call or apply method is used.

5. The super() keyword must be called on an child class that extends a parent before the "this" keyword can be used. It passes parameters to the parents constructor function and calls it.
