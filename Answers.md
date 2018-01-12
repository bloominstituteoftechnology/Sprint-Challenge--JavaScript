# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.
  * A `.forEach` method is a method on the global Array object's prototype that executes the callback function provided one time for each element of the array. However, unlike `.map` (also on the global Array object), a `.forEach` always will return "undefined", and therefore is not a chainable method. `.map` returns a new array of elements that are the result of the callback function provided. Neither method directly mutates the array on which they are called, but the callback function may do so.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  * The different data types are the **primitives** (number, boolean, string, null, undefined, and symbol (new in **ES6**)), and objects (not a primitive). An array is a special type of object that has methods on it's prototype allowing traversal (iteration) and mutation. In addition, arrays are not forced to be "dense" (not every index must contain a value). This is because arrays are "list-like" in that their elements have specific indices and therefore order, unlike the properties on an object.
3. What is closure? Can you code out a quick example of a closure?
  * Closure is the invocation of an inner function (inside an outer function) that references a variable in the scope of the outer function. In returning this inner function, the inner function maintains a reference to the aforementioned variable due to the lexical environment. This can be used to create/emulate "private variables" in JavaScript. Example:

  ```JavaScript
  const counter = () => {
    let count = 0;
    return () => count += 1;
  };
  ```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
  * In absence of any other rule application, the keyword `this` inside a function with global scope refers to the global object (the window in the browser).
  * When the function is called by a preceding dot, the object to the left of the dot is `this`. For example a method on an object, when invoked, retains the name of the object as `this`.
  * In the use of a constructor function, `this` refers to the specific instance of the object instantiated by the constructor.
  * Explicitly, `.call`, `.apply`, and `.bind`, when used to invoke a function, specify `this` in their first parameter (`.bind` is a somewhat special case in that it creates a new function that, when called, has already bound the value of `this` to it, wherein the other methods are immediately invoked).