Describe the biggest difference between .forEach & .map.
map returns a new array, forEach mutates/does work on the array without returning anything

What is the difference between a function and a method?
function is generally globally scoped while a method is scoped to this

What is closure?
When a funtion has a closure over another function it means that is has access to its lexical scope. It can bubble up and the variables it needs from the closure are saved instead of garbage collected

Describe the four rules of the 'this' keyword.
Global scope binding, implicit scope binding, explicit scope binding, and new binding.

Global - the this keyword has not been bound to anything other than the top level window object.
implicit - there is no binding being done but it is implied by being nested inside an object
Explicit - we are telling it what to bind to using apply,bind,ect
New - we are creating a new object through a constructor function or class which has its specific scope including singleton properties

Why do we need super() in an extended class?
Because we need to inherit the protoype and properties
