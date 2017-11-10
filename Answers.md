# Your responses to the short answer questions should be laid out here using Mark Down.
For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### 1. Describe some of the differences between `.forEach` & `.map`.

- `.map` returns an new array after iterating over the elements in the *original* array with a function.
  - So `.map` doesn't modify the array it is working on (i.e. called on).
- `.forEach doesn't return anything. It simply iterates over the elements in the array with a function.
  - So `.forEach` also doesn't modify the array it is called on.

#### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

- String
- Number
- Boolean
- Array
- Object

Arrays are a bit special because they can hold multiple values like an object, but also have some built-in methods like `.length`, `.pop`, etc. attached to the Array prototype.

#### 3. What is closure? Can you code out a quick example of a closure?

Closure is both the function and the local enviroment where the function is declared. 

Closure allows an inner function to reach **out** of it's scope enviroment to grab the value of an already declared variable in outer functions. It's only one way though—an outer function can't see variables **inside** a nested function.

An example of closure:

```
function outterFunction() {
    let name = pinwale;
    function print() {  // this print() function is a closure
        return name;    // the part between the brackets...
    }                   // ...is also part of the closure
}
```

In the example above, the `name` variable is invoked in the `print()` function—but `name` does not exist in the closure! It has to reach out to the `outterFunction()` to find the value of `name`.

#### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

- using `this` inside functions in the the global scope (i.e. not nested): 
  - then `this` refers to the `window` object.
  - because functions in the global scope are actually methods of the `window` object.
- using `this` in a function called in dot notation:
  - then `this` refers to the object mentioned before the dot.
- using `this` in a class object (a.k.a. a constructor function):
  - then `this` refers to the specific instance created from that constructor function.
- using `this` with `.call()`, `.apply()`, or `.bind()`:
  - then `this` refers to the object of whatever is in the parenthesis.