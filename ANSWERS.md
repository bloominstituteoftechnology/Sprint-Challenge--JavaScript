# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
A: .map returns a new array after looping through data.  .forEach just loops through the data.

2. What is the difference between a function and a method?
A: Methods are functions that are attached to objects

3. What is closure?
A: A closure is when you have a function, and within that function, access a variable from outside of
the function you're in.  The inner scope of a function accessing an outer or global scope.

4. Describe the four rules of the 'this' keyword.
A: Window Binding: This is like declaring a global variable.  It is on the outermost level of scope,
and the keyword is bound to that value throughout the entire window. 


Implicit Binding: When you invoke a function, you'll have an object to the left of the dot.  That
object is what 'this' is bound to.   jim.SayName(), jim = 'this'

Explicit Binding: using .call, .apply, or .bind, 'this' is whatever you pass through the parentheses
when using those functions.  sayName.call(stacey), stacey = 'this'

New Binding:  'new' is placed in front of a function with values, and a new object is created 
with those values. 'this' is the object and its values.  new Animal(black, zebra, male)





5. Why do we need super() in an extended class?
We use it to use the properties from the parent, or 'above', object
we want to inherit from. 
