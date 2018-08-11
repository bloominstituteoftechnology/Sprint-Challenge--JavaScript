1 Describe the biggest difference between .forEach & .map.

+ While both allow iteration through an array there are some major differences. 

+ forEach() executes a function once for each array element. It calls a provided
+ function on each element in the array. Additionally, this call back is allowed to mutate the calling array.

+ map() creates a new array with the results of calling a provided function on every element that is iterated through
+ in the target array. map() returns a new array of the same size as the calling array. It utilizes return values.

2 What is the difference between a function and a method?

+ A function is a set of logical statements that performs a task. 

+ A method is a function that is defined as a key value within an object and can be called within the object.

3 What is closure?

+ A closure is a function that exists within another function and that has accss to the outer function's variables. 
+ Additionally, a closure has three scope chains: Access to it's own vairables, access to the outer functions variables and access to global variables.


4 Describe the four rules of the 'this' keyword.

+ Implicit Binding - When 'this' is used within a function within an object and is bound to the scope of the object within which it exists.
+ Explicit Binding - Utilizes .call, .apply, and .bind to explicitly bind 'this' scope to the target defined within the those methods.
+ Window Binding - The default binding with sums to global scope within the browser. Unless otherwise clearly denoting the scope of 'this' the scope is window binding.
+ New Binding - Utilizing the word 'new' we creat a new object to which the scope of 'this' is then bound.

5 Why do we need super() in an extended class?

+ In ES6 we need to super to take the place of .call so that we can link our constructor function to it's parent constructor function and allow the 'this' scope to be relevant within the child constructor function.
