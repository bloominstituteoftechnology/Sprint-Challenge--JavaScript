1. A key difference is .forEach() directly mutates the original array you're working with which is bad practice. .map() simply creates a new array leaving the original alone. Another key difference is .map(), after iterating through a list, transforms ONLY members of the list while .forEach has side effects to each of the list item.

2. The difference between a function and a method is a function can be made almost anywhere while a method is ONLY a function inside of an object.

3. Closure has to deal with when there is a function inside of a function. The inner-nested function has access to the outer function's variables and  parameters, and also global variables.

4. We need super() in an extended class to gain access to an object's parent(constructor). Without it, we cannot reference back to the parent.

