
1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between '.forEach' and '.map' is that '.forEach' just iterates through an array and completes whatever task it is assigned to do, while '.map' automatically pushes to a new array.

2. What is the difference between a function and a method?

A function is a set of code that can be used anywhere, while a method is a function that is used as a property of an object, or down its inheritance chain to other objects.

3. What is closure?

Closure is like a backpack for functions, where a nested function would have access to variables of the outer function, and it's outer function.

4. Describe the four rules of the 'this' keyword.

Window- Window binding, it where the 'this' keyword is bound to the window scope //Never do that

Implicit- Implicit binding is automatic, where the 'this' keyword is bound to the local scope

Explicit- Explicit binding is where we use .call, .bind, or .apply to specifically bind the 'this' keyword

New- 'This' binds to the newly created objects


5. Why do we need super() in an extended class?

We need super() in an extended to class to gain access to the prototype of the class where we extended from.