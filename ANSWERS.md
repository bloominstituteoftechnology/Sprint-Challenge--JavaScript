# Your responses to the short answer questions should be laid out here using Mark Down.

1. Describe the biggest difference between `.forEach` & `.map`.
- **`.forEach` iterates through, but `.map` iterates, creates a new array from mutating the original array.**

2. What is the difference between a function and a method?
- **A method is a type of function that is stored on an object.

3. What is closure?
- **It's the unique ability of JavaScript to find a variable that might not be in the same scope that it's requested. JS will bubble out until it hits the global window to search for a variable.**

4. Describe the four rules of the 'this' keyword.
- **Implicit - "Implied" -`this` is referring to whatever is to the left of the `.this`.**
- **Explicit - when we use `.apply` `.call` or `.bind` to form a new `this`.**
- **new - Used when constructing a new instance.**
- **Window - If `this` isn't specifically tied to anything, JS will go all the way to the window object to describe `this`.**

5. Why do we need super() in an extended class?
- **To pull the functions from the Parent constructor class.**
