# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
## 1. Describe some of the differences between `.forEach` & `.map`.
.map takes each element in an array, puts it through a function, and whatever is returned is added to new array. The new array is returned at the end.

.forEach works similiarly, but no array is returned at the end.

## 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Objects, Numbers, Strings, Null, Booleans

Arrays are really just Objects, only they use a number as a key instead of a string.

## 3. What is closure? Can you code out a quick example of a closure?
Closure is when you have a function inside of a function, so that the inner function has access to the variables that the outer function contains.

An example could be if you wanted to make a function that can only be called a certain number of times.

```const limitedFunction = () => {
  let count = 0;
  return () => {
    if (count < 2) {
      count++;
      console.log('hello')
    } else {
      return null;
    }
  };
};
```
This code would only print out 'hello' twice

## 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
1. `this` refers to the Window object when used in the global scope
2. The object to the left of the dot is `this`
3. When used in a constructor function, `this` will refer to the instance of the object
4. `this` is defined explicitly when using .call and .apply