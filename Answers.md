

1. The biggest difference between forEach and Map is that forEach doesn't return anything (ex. "undefined"), while map actually takes the values and returns them in a new array. forEach is mainly used to call on each element within an array without returning a value. 

2. They are essentially both functions, however a method is merely a function that is a property inside an object. If the function is not within an object, then it is called a "function". 

3. A closure is defined whenever a function is created. Whenever that function is called on, the closure allows that function to access the data within its scope. Closures are great for callbacks because without closures, it would be very tricky to implement a callback. 

4. The four rules of "this" are the following bindings: "new", "window", Implicit, and Explicit. 
   
   the new binding combines the constructor function with a new keyword to build a new object or "instance". 

   A "Window" binding occurs when there is no context to the left of the dot when "this" is invoked. In these cases, "this" invokes the "window" instead.  

   Implicit binding is when dot notation is used to call on a function. Whatever context is to the left of the dot, assumes the role of the context for the "this" function.

   Explicit binding occurs when .call(), .apply(), or .bind() are used in a function."this" is used as the context in this type of binding. It also allows you to use global functions, instead of relying on methods within the object. 

5. We need super()in the extended class because it calls on the parents constructor and automatically passes the context to the child or if you prefer, extended class. 
