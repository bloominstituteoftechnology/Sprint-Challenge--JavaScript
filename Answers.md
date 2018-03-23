# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. A difference in the forEach and .map methods is that .map returns a new array after running a function through it for each element, whereas forEach applies a function to every element in the array but does not return a new array. This means the forEach function will mutate an array.

2. 5 different types: Variables, Numbers, Array, Objects, Functions. Arrays are special because the elements are stored in brackets and indexed based on its order starting from 0. This could be useful for storing things under the same category such as students in a class.

3. Closure is essentially using functions inside of a function, the inner function can reach out and use the outer function's variables. 

```javascript
function Sandwich() {
    let bread = '2 slices';
    let peanutButter = '1 scoop';

    function makeSandwich() {
        console.log('Put ' + peanutButter + ' of peanut butter between ' + bread + ' of bread.');
    }
    return makeSandwich();
}
```

4. 
    1. Global - When 'this' is used in the global scope it will reference the window/console.

    2. Implicit - A function being called with the dot notation will have 'this' referencing the object preceding the dot.

    3. New - When the new keyword is used, it is implying that a constructor is creating a new object. The 'this' keyword will reference the new object being created.

    4. Explicit - When calling an object using the .call or .apply method, the object that 'this' is referring to is overwritten.
