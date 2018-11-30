1. The biggest difference is that .map creates a new array and .forEach doesn't.

2. A method is a function that lives in an Object or class.  Where as a function lives in the
  global object.

3. Closure is where an inner function has access to the outer functions scope.

4. The four rules of 'this' are as follows
        A) GLOBAL BINDING - When in the global scope, the value of "this" will be the window/console Object.
        B) IMPLICIT BINDING - Whenever a function is called by a preceding dot, the object left of the dot gets "this".
        C) NEW BINDING - Whenever a constructor function is used, "this" refers to the specific instance of the object
        that is created and returned by the constructor function.
        D) EXPLICIT BINDING - Whenever JavaScripts "call" or "apply" or "bind" method is used,
        "this" is explicitly defined.

5. Super allows access to the "this" item in the extended class. It also is used to access
  and call functions on an object's parent.
