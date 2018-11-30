1. Describe the biggest difference between `.forEach` & `.map`.
- `.forEach` executes a provided function once for each array element where as `.map` creates a new array with the results of the provided function that was run on each element of the array.

2. What is the difference between a function and a method?
- A method is a function withing an object. A method is called on an object `object.method()`

3. What is closure?
- Aallows variables to be passed down through nested functions. A variable declared in the base functions is able to be used in a nested function. If the nested function is using the variable then the two passs compiler will see the variable used in the nested function and pass it through. If a variable at the base function is not used in a nested function then it won't be passed to the nested function as a closure.

4. Describe the four rules of the 'this' keyword.
- Window/Global binding - when using `this` it refers to the global scope and not within the funciton it's used in
- Implicit binding - when used within a method `this` is implied that it bound to the parent object which the method is in
- New binding - when `this` is used within a constructor function. the `this` keyword is bound to the object that is created using the function
- Explicit binding - by using `.call` and `.apply` you can override what a constructor object gets set to. `mike.speak.call(josh)`

5. Why do we need super() in an extended class?
- Super takes the parents constructor atributes and allows them to be used within the child