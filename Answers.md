# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Differences between `.forEach` & `.map`.
#### Output
`.map` will output a new array using the results of the callback function invoked
`.forEach` will always output `undefined`, although the callback function may output anything: A new array, an object, strings, or numbers.
#### Use Cases
`.map` can be used almost anywhere in the processing of an array, since it outputs an array, which can be passed into another (callback) function on down the chain of an algorithm or process.
`.forEach`, since it has no output other than `undefined`, will be most useful as the last step in a process or in some sort of side process. 


