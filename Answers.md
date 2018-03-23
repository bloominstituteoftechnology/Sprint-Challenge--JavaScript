# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between `.forEach` & `.map`.

.forEach modifies the array called while .map makes a new one and leaves the original unmodified. .map gives return values while .forEach does not.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Strings, booleans, numbers, arrays and objects. Arrays are special because they can store and access data in a certain order because they have indexes.

3. What is closure? Can you code out a quick example of a closure?

Closure is the ability to call on things from outside of a function without passing it in as a parameter.

let pie = 'pie';
function closure(){
    pie = 'cheese';
    console.log(pie);
    return pie;
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

There is the default 'this' which refers to window.

There is the implicit 'this' in which 'this' refers to a property's object within a function that is called using dot notation.

In explicit binding, 'this' refers to an object passed into a function as a parameter through the use of .call .apply or .bind.

When using new, 'this' is used within a constructor to refer to the new objects name.