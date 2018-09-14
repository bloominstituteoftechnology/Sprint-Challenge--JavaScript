1. Both .forEach and .map execute a function once for each element but .map is different in that it returns a new array with those values which are usually mutated in some way.

2. A method is simply a function that lives inside of an object.

3. functions have access to variables defined outside of their body.

 4. Implicit Binding - look to the left of the dot at call time.

 Explicit Binding - Telling the function what the context of the this keyword is going to be using call, bind, or apply.

 new Binding - Whenever you have a function invoked with the new keyword the this keyword is bound to the new object being constructed.

 Window Binding - If none of these rules apply then the this keyword is going to default to the window object.

5. The super keyword is used to access and call functions on an object's parent.

