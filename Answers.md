1. The difference is that although both functions execute on every element in an array, map() returns a new array while forEach() does not return anything.
2. Both are functions, but a method is a more specific type. A method is a function that is contained within an object.
3. It is the combination of a function bundled with references to its lexical environment. This means that a closure gives access to the scope of an outer function even from within an inner function.
4.
  Global (window) - the default binding whenever "this" is used without a specific call such as dot notation or call(), apply(), and bind(). When in a browser, the global context is the window.
  Implicit binding - when "this" is called with a dot preceding it, it will refer to the object before the dot. One of the most commonly used applications.
  New binding - used with constructor functions to refer to the specific object in question. In a case of new binding, "this" points to the new object rather than the function from which it is constructed.
  Explicit binding - "this" is explicitly bound whenever call() or apply() is used. It is bound to whatever is referenced by these functions.
5. The use of super() in an extended class gives access to the "this" keyword. It can also be used to call functions on a parent object.
