# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

_.forEach_ takes a function and iterates it through each item in an array.
**map** can do the same, but it can make a new array in the process.

2. What is the difference between a function and a method?

*functions* is made up blocks of code to something in particular.
*methods* is a function within an object.

3. What is closure?

**closure** when a function is nested in another function or within its scope.

4. Describe the four rules of the 'this' keyword.

    * 1. Implicit Binding- the this keyword would reference when/where the function was invoked. Will reference left of the invocation (left of      the dot) 

    * 2. Explicit Binding- when we explicitly state what the this keyword is referencing when we use .call() or .apply() or .bind(). The this        keyword will reference the first argument passed into .call() etc.

    * 3. new Binding- When we make a constructor and use the new keyword, this will refer to the new object being constructed.

    * 4. window Binding- If none of the 3 conditions above are met, the this keyword will default and reference the window object. 

5. Why do we need super() in an extended class?

    To call and access or inherit functions on an object's parent.
