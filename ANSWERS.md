# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`. 

.forEach will return an item or an index, but .map can return an entire array of the items we are looking at/for.

2. What is the difference between a function and a method?

A function is an operation we build outside of a class, while methods are operations built within a class.

3. What is closure?

Closure allows us to narrow down our scope from global to local--enclosing a function tells the program to only look within that function for the data we ask for.

4. Describe the four rules of the 'this'

Rule 1. window Binding -- Refers to the this keyword in a global context. If the this keyword is called without using another binding method, it will reference "window".
Rule 2. Implicit Binding -- Uses dot notation. The this keyword references the object directly to the left of the dot when you invoke a function.
Rule 3. new Binding -- Allows us to use the values assigned with the this keyword by using the "new" keyword to invoke a function.
Rule 4. Explicit Binding -- Uses the this keyword within .call(), .apply(), or .bind() on a function.

5. Why do we need super() in an extended class?

Using super() allows us to pass and use any new attributes created in an extended class back to the original class.
