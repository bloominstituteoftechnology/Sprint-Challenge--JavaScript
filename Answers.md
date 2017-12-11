# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Question 1
1. Describe some of the differences between `.forEach` & `.map`.

The difference between forEach and map is that map mutates the original Array while forEach creates a new Array and leaves the original Array un-mutated.

## Question 2
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Different Types:
- String
- Number
- Boolean
- Object
- Function

An Array is special because it is actually an Object under-the-hood.

## Question 3
3. What is closure? Can you code out a quick example of a closure?

Closure is when a function sees outside its scope (for things such as variables).

An example is:

```
const foo = 'bar'
const newFunction = () => {
    console.log(foo);
}
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

- can point to the global variable / Object
- can point to within a function invokation call between the '()' (implicit binding)
- can point to when a 'new' constructor is created (e.g. new Object)
- whenever an explicit binding is used: .call; .apply; .bind

