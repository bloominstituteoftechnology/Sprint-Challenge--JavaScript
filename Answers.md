Describe the biggest difference between .forEach & .map.
    Map returns a new array of elements while in turn passing each element back to the callback.
What is the difference between a function and a method?
     Functions are defined outside of classes, while Methods are defined inside classes
What is closure?
     When a function is declared and created, a new scope is created. Any variables declared within that function’s scope will be enclosed in a scope. Closure is accesability to that variable. 
Describe the four rules of the 'this' keyword.
     1. Implicit Binding - When a funtion in invoced, if you look to the left of the dot, that is what is being referenced.
     2. Explicit Binding - This occurs when .call()- pass one by one, .apply()-pass on with an array, or .bind()- same as .call but returns new function to invoke later,  are used in a function
     3. New Binding - when a function is invoked with the new keyword, the this keyword inside that function is bound to the new object being constructed.
     4. Window Binding - if non of the rules apply, the this key word will default to the windo object.
Why do we need super() in an extended class?
    This is to pass any new attributes back up to the constructor of the parent object.