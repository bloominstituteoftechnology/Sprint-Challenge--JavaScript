1. biggest difference between .forEach and .map is that .forEach executes a given function once on each element of a passed array, but .map does the same thing and returns all the results in a brand-new array

2. a method is a function associated with, defined in, and called with reference to an object/class, while functions are defined outside of objects/classes

3. closure is a captured lexical state defined when going into a more local scope (a function) that gives that local scope a reference to any variables declared within its outer scope (an outer function, or the global scope if there is no other outer function)

4. `this`:
   1: window/global binding--when in global scope, or referenced to the global scope, `this` is bound to the window/console

   2:implicit binding--when a function is called by a preceding dot, the object/class to the left of the dot is what `this` binds to

   3: explicit binding -- .call or .apply methods have been used, they explicitly defined what `this` gets set to

   4: new binding -- when a constructor function is used to create a given object with `new`, `this` will be bound to the specific object being created

5. we need super() in an extended class to call the parent's attributes to be carried over and passed to the extended class, which are then bound to the extended class through the lens of the extended class' attributes
