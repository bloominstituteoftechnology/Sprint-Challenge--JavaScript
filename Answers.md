
1. The main difference between forEach and map is that map doesnt mutate the original array whereas forEach does.
2. A function is usually just made in a global scope however when you create a method its specific to that object its made on (Usually stored in __proto__) but can be transfered over using classes or .create and .call on constructors
3. Closure is when you have multiple nested functions protected within a main function so a. You can't access the nested funtions without calling the main function b. some of the functions use other functions variables in the closure scope
4. The four rules of the this keyword are:
a: Window is the main container of objects, when looking at a forest, this is the forest not a specific tree.
b. Implicit binding is when you create an object with static props that you input for each individual object.
c: A new binding is an object with props that can be variable and added when using the new keyword, this is a constructor.
d. Explicit binding is a way we can control specific properties on an object and add bindings as we want using create and call.