1. Describe the biggest difference between .forEach & .map.

   - .forEach() loops through each element of an array but doesn't return anything back other than undefined.
   - .map() loops through each element of an array and returns a new array that is an altered version of the array that was loop through.

2. What is the difference between a function and a method?

   - function is defined and invoked in the global or local environment, it is its own object.
   - a method is basicly a function but is part of an object properties value and is invoked with that object.

3. What is closure?

   - a closure is a type of scope that presistently exist even after the environment it was created in is destroyed. the closure is accessed and mutable through the function that carries it like a backpack and only carries what is needed.

4. Describe the four rules of the 'this' keyword.

   - this window - reference the window object.
   - this implicitly - automatically points to the object that it was assign in
   - this explictly - assigning the object that this should point to through .call, .apply, and .bind
   - this new - is used for constructor functions.

5. Why do we need super() in an extended class?
   - allows the child class to access the parents class methods and this.properties it has in its constructor.
