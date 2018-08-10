1. .map returns a new array of elements while also passing each element back to the callback.

2. A method is a function that is associated with a specific object, or has it implicitly passed.

3. A closure is an inner function with access to the enveloping function's variables.

4.   1. The most general, referring to the global scope, referring to the windows as the object.
     2. This refers to the object that comes right before it, seperated by a period.
     3. New binding refers to a specific instance or version of an object. This is due to there potentially a few versions of this object existing.
     4. Whenever the call or apply method is used, the binding is explicitly defined meaning you only want this context to apply() or call().

5. super() is used to pass any new attributes back to the contructor of the parent object