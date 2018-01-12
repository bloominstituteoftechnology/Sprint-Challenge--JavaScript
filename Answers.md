#### Your responses to the short answer questions should be laid out here using Mark Down.
 For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### 1. Describe some of the differences between .forEach & .map.

  One of the differences between `.forEach` and `.map` are `.map` returns a new array while `.forEach` doesn't.
  Another difference is that `.forEach` loops through the items of an array allowing to change each item while `.map` does the same but, saves the results.
  A third difference is running `arr.map` will return the elements while `arr.forEach` will return `undefined`.

#### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
+ Arrays: Arrays are special because they can hold multiple values.
+ Function
+ Numbers
+ Strings
+ Object
+ Boolean (Bonus)

#### 3. What is closure? Can you code out a quick example of a closure?
Closure is a function that access the variables of an enclosing function.
A closure is when you add a function within a function

Example:

```
function counter(num) {
    let count = 0;
    function counting() {
        count++
        return count;
    }
    return counting;
}
```

#### 4. Describe the four rules of the `this` keyword. No need to provide examples about it this time :)
+ Whenever a function is contained in the global scope, the value of `this` inside of that function will be the `window` object.
+ Whenever a function is called by a preceding dot, the object before that dot is `this`.
+ Whenever a constructor function is used, `this` refers to the specific instance of the object that is created and returned by the constructor function.
+ Whenever JavaScript’s `call` or `apply` method is used, `this` is explicitly defined.