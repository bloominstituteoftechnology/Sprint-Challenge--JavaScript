# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Differences Between `.forEach` & `.map`
----------------------------------------------
**`.forEach()`** executes same code on every element in an array but does not change the array.
**`.map()`** also executes same code on every element; however, is able to update elements and return a new array.

### 2. Five Different Types in Javascript
-----------------------------------------
- String
- Number
- Boolean
- Undefined
- Null
Arrays are special in a way that they are able to represent similar values as a group.

### 3. Closure Explanation & Example
-------------------------------------
A closure gives you access to an outer function's scope from an inner function. Closures are created every time a function is created.

*Example of a closure*
```javascript
const counter = () => {
  let count = 0;
  return () => {
    return ++count;
  };
};
```

### 4. The Four Rules of the 'this' Keyword
--------------------------------------------
1. Window Binding: If none of the other binding rules apply, then the 'this' keyword is going to default to the window object.
2. Implicit Binding: When you call a function, and the function is invoked, you can refer to the 'this' keyword by looking to the left of the dot at call time.
3. New Binding: When a function is invoked with a 'new' keyword, the 'this' keyword inside that function is bound to the new object being constructed.
4. Explicit Binding: Tells the function what the context of the this keyword is going to be, using .call, .apply, and .bind methods.
