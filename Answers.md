Describe the biggest difference between .forEach & .map.
- .forEach() - executes a provided function once for each array element. Doesn’t return anything but calls the appropriate function for each element.
- map(): creates a new array with the results of calling a provided function on every element in the calling array. Does what .forEach() can but also utilizes return values and creates a new array of the same size.

What is the difference between a function and a method?
A function is a code that is called by name. It is independent from an object. Meanwhile, methods are associated with an object.

What is closure?
Closures are functions. But when a function captures state upon its creation, we call it a closure.

Describe the four rules of the 'this' keyword.
-	If it is, `this` inside the function is a new object. (new)
-	If apply, call bind are used to call a function, `this` inside function is an object being passed.
-	If function is called as method(obj.func) and if dot notation is used to invoke, `this` is the object that function is a property of. 
-	If function is called in global scope and strict mode is enabled, return is undefined. If not, window.

Why do we need super() in an extended class?
Used to access and call functions on an object's parent. Binding from parent.  Like .call().


