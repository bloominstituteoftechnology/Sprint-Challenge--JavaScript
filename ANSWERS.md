# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

.forEach iterates over the inputed array.  .map returns a copy of the inputed array on which a function has been appleid to each element.

2. What is the difference between a function and a method?

A method is a key: value pair assigned to an object.  The methods that are built in to Javascrit, e.g. .map, are functions assigned to the corresponding prototype object.

3. What is closure?

In JS a parent cannot see into the local scope of a child but a child function can access the scope outside of itself.  If the local environment of a called function is contained within a variable values inside the scope of the function can be stored in the callstack.  As an unintentional side-effect this can cause problems but if leveraged on purpose this odd feature of JS can provide some flexible utility.

4. Describe the four rules of the 'this' keyword.

1: Window Binding -- 
`this` refers to the global object beneath which all of JS is contained.

2: Implicit Binding --
`this` refers to the object left of the `.` when invoking a method on an object.

3: New Keyword --
`this` refers to the object being created by a constructor function.

4: Explicit Binding -- 
Utilizing .call, for example, we can purposily redirect the binding of `this`.

5. Why do we need super() in an extended class?

In class syntax, `super` forces child objects to inherit their parents' properties and methods.
