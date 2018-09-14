1. Both `map` and `forEach` iterate over an array and run a function for every item, but `map` returns a new array.
2. A method is just a function that is a property in an object.
3. Closure describes what a given function has access to based on it's scope. A function has access to a variable that inhabits the same scope as the function. So for example, if scope lookes like `Global scope -> Parent scope -> Child scope -> Grandchild scope` a function in `child` scope has access to variables in `global` and `parent` scopes but not `grandchild`.
4.  * Window binding--when using "this" keyword in the global scope, the value defaults to the window Object.
    * Implicit binding--value of "this" becomes the object on the left side of a function call. 
    * New binding--value of "this" becomes an object created by the constructor function containg the "this" keyword.
    * Explicit binding--"this" is defined by a call or apply method.
5. `super()` sort of replaces `call` When we're using classes instead of prototype. It gives the parent object access to the attributes of the child object.