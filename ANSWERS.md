# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
`.map` returns a new array where as `.forEach` just does whatever call back you have on each item. 
2. What is the difference between a function and a method?
A method is tied to a class a function is not
3. What is closure?
If you have a function defined inside a function a closure is the inner function getting a varible from the outer function 
4. Describe the four rules of the 'this' keyword.
⋅⋅⋅1.Window: If the `this` is in the global scope it points up to the object above it, the `window`
⋅⋅⋅2.Implicit: References the object on the left side of the dot from the function on the right
⋅⋅⋅3.Explicit: If `.call()`, `.apply()`, or `.bind()` are invoved it's this. You pass a property to say what `this` is
⋅⋅⋅4.New: Uses the javascript `new` to create a new object. `this` refers to adding properties to the just created object
5. Why do we need super() in an extended class?
Something inside the constructor for the class needs to construct the class it was extended from 
