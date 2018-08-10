1. .map is a method that makes a new array with the results of a certain function called on every element in the array that is being called. .forEach is a method that executes a function once for each element in an array.

2. Functions have return values, but methods do not. Methods called by reference variables are called objects where as functions do not have any reference variables.

3. A closure is a function that has access to the parent scope, even after the parent function has closed. Closures make it possible for a function to have their own private variables.

4. If the new keyword is used when calling the function, (this) inside the      function is a brand new object. (new binding)
   If apply, call, or bind are used to call a funtion, (this) inside the function is the object that is passed in as the argument. (explicit binding)
   If dot notation is used to invoke a function, (this) is the object that the funtion is a property of. (implicit binding)
   If a function is invoked without any of the conditions present above, (this) is the global object. (window binding)

5. The keyword super is used to access and call functions on an objects parent. the extended class will have access to the parent class.