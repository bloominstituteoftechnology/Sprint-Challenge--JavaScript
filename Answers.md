1. The biggest difference between the forEach & map function is that while they both  take in a callback and iterate over an array, map creates a new array that it can return or log. for each on the other hand will modify or return data based on the old array.

2. Method is a function inside an object. otherwise they are both function. there is no other essential difference between the two.

3. A closure is a backpack like storage mechanism used to carry data that will be used later down the nested scope chain as need by other structures like functions in this case. This is facilitated by the two pass compiler used by  javascript. The compiler learns it will need the  internal variable beyond its currently scoped execution context the nested function and stores it module a closure.

4.
a
Principle 1 This is the global / window object, if there are no other objects the this keyword always refers to the window.all objects and properties cascade down in inheritance from the global window object.

b
Principle 2 Most common rule.Implicit meaning implied or automatic object creations.we tell the this keyword to look at the object it is in, instead of the window object that everything is in.module(here the object name will be what this refers to.)

c
Principle 3 the new keyword actually creates a new object from scratch. its part of the constructor function and will apply the this keyword to the object that is currently being created at that point in time.

d
Principle 4 Explicit allows us to use the call or apply method to direct the this keyword to the specific object that we are referring to with out function call. this is needed because functions don't by themselves have the ability to affect the application and binding of the this keyword nor replace the window bindings.



5.
