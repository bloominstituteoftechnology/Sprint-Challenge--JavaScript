# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
- .forEach returns the current array while .map returns a new array
2. What is the difference between a function and a method?
- a method is a function that can be invoked with dot/bracket notation
3. What is closure?
- the environment where a function is privately referrenced in the outer scope
4. Describe the four rules of the 'this' keyword.
- Window Binding - the value of this is the global window object
- Implicit Binding - the value of this is the object before the dot of the function being invoked
- New Binding - the value of this is the object when called and returned by a constructor
- Explicit Binding - the value of this is the object when invoked by the .call or .apply method
5. Why do we need super() in an extended class?
- to avoid duplicating the constructor parts that already exist in its parent class
