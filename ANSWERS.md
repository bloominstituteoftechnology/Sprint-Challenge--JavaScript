# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
.forEach will call the given callback function, passing parameters from the array element for each, but it will not do anything with the return value for each call. Instead, it will perform some operation. Its value is in entirely in its side effects. 

.map, on the other hand, applies the callback to the passed values from each array element, and then appends the function return value to a new array. After .map has finished interating, it returns the new array. It can be useful without any side effects whatsoever.

2. What is the difference between a function and a method?
A function is a callable object within a lexical scope. A method is just a function that is accessed by a reference from an Object property key. In fact, the same function could be accessed both by a call within a lexical scope, or a method call on an object key. An important difference for a method though, is that the function will have its **this** property set to the object whose key is being used to call it. This is called implicit binding, and gives additional flexibility and contextual information to the method call that the equivalent function would not have in absence of explicit or new binding.

3. What is closure?
Closure is the set of variables that a function has access to at runtime outside of its local variables and parameters, through its lexical scope (aka nested scope). If a function persists in memory, it will continue to have access to its closure at time of its declaration. 

4. Describe the four rules of the 'this' keyword.
    1. The Default Binding will be the global object. It will be the this keyword unless one of the bindings below is in effect.
    2. The implicit binding will be in effect when a function is called via an Object Key. This will be based on the immediate object whose key is being accessed (i.e., the first object to the left of the key for the method. This binding is overriden by the explicit binding or the new binding.
    3. The explicit binding will be in effect if a function is called using its call, apply, or bind methods. All of these methods take a this argument as their first parameter, with the function's normal parameters defined afterwards. Call and apply will immediately call the function with **this** bound to whatever object was passed as a first parameter. The bind function will return a value of the original function that differs in its **this** being hard bound to the Object originally passed to bind as its first argument.
    4. The new binding. When a constructor function is called with new preceeding it, **this** will be set to the new object automatically created by the new call on the function.

5. Why do we need super() in an extended class?
The super passes the arguments that are required for the "super class," in order for the object to have the same properties defined as its "super class".
