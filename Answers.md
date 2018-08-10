1. A key difference is .forEach() directly mutates the original array you're working with which is bad practice. .map() simply creates a new array with the data wanted, leaving the original alone.

2. The difference between a function and a method is a function can be made almost anywhere while a method is ONLY a function inside of an object.

3. Closure has to deal with when there is a function inside of a function. A way to think of closures is through scope. Variables can either be in the global scope, or in a local scope. We can make variables "private" in a sense by putting them inside a block of code via functions where only the function can access it, and no other thing outside the function can.

4. We need super() in an extended class to gain access to an object's parent(constructor). Without it, we cannot reference back to the parent.

