# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

.forEach mutates the inputed array.  .map returns a copy of the inputted array on which a function has been appleid to each element.

2. What is the difference between a function and a method?

A method is a key: value pair assigned to an object.  The methods that are built in to Javascrit, e.g. .map, are functions assigned to the corresponding prototype object.

3. What is closure?

An instantiation of the lexical environment of a called function.

4. Describe the four rules of the 'this' keyword.

1: Window Binding -- 
`this` refers to the global object beneath which all of JS is contained.

2: Implicit Binding --
`this` referes to the object left of the `.` when invoking a method on an object.

3: New Keyword --
`this` refers to the object being created by a constructor function.

4: Explicit Binding -- 
Utilizing .call, for example, we can purposily redirect the binding of `this`.

5. Why do we need super() in an extended class?

In class syntax, `super` forces child objects to inherit their parents' methods.
