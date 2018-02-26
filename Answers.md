# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
    .forEach loops through every element of the array and performs functions based on each item. it can mutate the array using callbacks or just manipulate other data. .map creates a whole new array based on the function performed by the callback.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    numbers, strings, objects, booleans, undefined. arrays are technically of type object.

3. What is closure? Can you code out a quick example of a closure?
    Closure is an inner function that can access variables inside the outer function. the inner function can be recursive and controlled by the counting of a variable inside the outer function. This lets you use recursion inside a function that is only called once by setting the counter variable on initial calling only, instead of resetting it every time if you werent using closure.

    const counter = () => {
        let count = 0;
        return () => {
        count++;
        return count;
    };

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

Window Binding: outside of .call, .apply, .bind, constructors or dots, this defaults to the window object
Implicit Binding: when a something is called using a dot, this equals the object immediately dbefore the dot.
New Binding: in a constructor function, this refers to the new object created by the constructor.
Explicit Binding: 