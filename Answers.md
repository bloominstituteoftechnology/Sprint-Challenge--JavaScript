# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. Describe the differences between `.forEach` and `.map`

    `.forEach` loops through an array and does NOT return anything
    `.map` loops through an array and returns a new array, atered by the contents of the callback function that was passed to the `.map` method.

# 2. Name 5 different Types in JavaScript

    Numbers
    Strings
    undefined
    null
    Array
    Object
    Boolean

# 3. What is closure? 

    Closure is a function that has access to variable in an outer scope.

    const name = 'AJ';

    const displayName = () => { console.log(`${name} is awesome`) };

    displayName();

# 4. Describe the 4 rules of the `this` keyword.

    window/global scope

    implicit scope -- refers to the object to the left of the dot of what the method was called with.

    when the `new` keyword is used.  This referrs to the new object being created.

    when `.call` or `.apply` is used, it refers to the object passed into the method.