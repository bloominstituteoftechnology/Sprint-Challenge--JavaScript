# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
  * `.forEach` performs a functions per each item on the Array *without* manipulating the Array. `.forEach` works like a regular for-loop that starts at index of 0 and goes through the last index of the Array.
  * `.map` also loops through the Array and performs a function for each item, but the difference from `.forEach` is that wth `.map` a new Array is created.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  * String
  * Number
  * Boolean
  * Object
  * Symbol.
Arrays are special Objects that can be looped over with actions performed per each item.

3. What is closure? Can you code out a quick example of a closure?
 * A closure is an inner function that is returned from it's outer function and assigned to a new variable.
 * This new variable, which is the outer function's returned inner function has access to the lexible invironment of it's outer function.

**An example:**

```javascript
const outer = (outerString) => {
  const outerLexibleInvironment = "outerLexibleInvironment";
  const inner = (innerString) => {
    return `${innerString} gets access to ${outerString}'s invironment: ${outerLexibleInvironment}`;
  };
  return inner;
};

const inner = outer("the outer");

console.log(inner("the inner"));
```

**In above example, inner's function is:**
```javascript
const inner = (innerString) => {
    return `${innerString} gets access to ${outerString}'s invironment: ${outerLexibleInvironment}`;
  };
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
  1. Implicit Binding. This is the most common. It refers to the object to the left of the dot at call time.
  2. Explicit Binding. Using `.call`, `.apply`, or `.bind` *explicitly binds* 'this' to a specific function's object.
  3. New Binding. Using the 'new' keyword will create a 'this' object pointing to the object that was created.
  4. Window Binding. 'this' defaults to the Window if nothing is to the left of the dot and `.call`, `.apply`, or `.bind` isn't used.