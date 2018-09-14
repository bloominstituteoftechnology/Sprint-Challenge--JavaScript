1. The biggest difference between .forEach and .map is that .forEach doesn't return anything while .map returns a completely new array.
2. The biggest differentiator between the two is that a method is directly associated with an object, while a function is defined outside an object.
3. When a function is called, closure allows a variable inside that function's local scope to be stored in memory in order to be used in a context outside that function's local scope when that function is invoked.
4. 
#### Window Binding:
If not bound to anything else, JS will default the binding to the "Window" object.
 
#### Implicit Binding:
Implicit binding means when you call a function and the function is invoked, whatever is left of the dot is referenced by the "this" keyword.
 
#### New Binding:
When using the "new" keyword in JS, the interpreter will create a new object and that will be what "this" is referencing.

#### Explicit Binding:
Explicit binding is using the .call, .apply or .bind methods to point the "this" keyword while a function is being invoked.

5. super() acts for extended classes in the same way "call" did when using prototypes - it binds the properties of the parent class to the child constructor function.