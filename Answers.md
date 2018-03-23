# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .forEach and .map are used to achieve different goals. ForEach is used when the programmer wants to perform an operation using each data point in the collection, but does not want to modify the underlying data. Map is used when the programmer wants to transform each piece of data in the collection to a new representation.

2. Array, Number, String, Object, Function. Arrays are special because their properties can be accessed using a numbered index, which makes them particularly useful for computation involving loops.

3. A closure is a function that is written in such a way as to have access to data outside of its own scope. Languages achieve this feature in many ways. In Javascript, a function has access to variables that are defined in a parent scope, such as a containing function or code block. An example: 

    ```let count = 0; let counter = () => ++count```

4. `this` can be lexically scoped (arrow function, takes whatever value of `this` is in the location code is being written (stupid)), implicitly scoped (`this` takes value of object on which method is being invoked (smart)), explicitly scoped (`this` takes the value of argument passed to `call`, `apply`, or `bind`). `this` can also be locally/window scoped, which is a less useful form of lexical scoping so nobody cares.