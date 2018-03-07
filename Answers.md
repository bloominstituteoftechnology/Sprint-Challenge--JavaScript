# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. .forEach only iterates over the array and creates a new array whereas .map actually modifies the existing array. 
2. Five different Types in JavaScript are:
    1. Strings - Strings are immutable but indexable. All indexes in JavaScript start at 0. So the first character in a string is at index 0 and the second at index 1, etc. The `.split()` method will turn a string into an array and the `.join()` method will turn an array into a string.  When strings are joined together with other strings that is called concatenation which can easily be done with `+`.
    2. Arrays - Arrays have many methods that can alter them and are indexed like strings.  Arrays in JavaScript can hold any of the data types in this list. Arrays can be nested inside other arrays. Arrays can also have empty indices.
    3. Objects - Objects are containers that can hold any type of data in this list as well. They are also easily modified. Objects are lists of keys (or properties) with their corresponding values.  The keys in objects are much like the indices in arrays. In fact, arrays actually are objects with their keys already assigned to 0, 1, 2,..., etc. Functions inside objects are called methods. Individual keys within an object can be referenced using dot notation (.e.g., `myObject.myKey`) or bracket notation (.e.g., `myObject[myKey]`).
    4. Functions - Functions are snippets of code that *do* something. Functions recieve input and produce output, or return something. Functions can be tied to variables making them a function expression which looks like this: 
    ```const myVar = function myFunction() {};``` 
    Functions can be named like the one above called *myVar*. If they do not have a name they are called anonymous functions and up until recently were written like this:
    ```function () {}```
    The above example is also called a function declaration because it is simply declared and not assigned to any variable. In ES6 (EcmaScript 6 or EcmaScript 2015) arrow functions can be used which look cleaner. 
    ```() => {}```
    The curly braces are not needed if the function fits on one line.
    The first set of parentheses `()` contain the expected input called parameters. Functions can take up to three parameters. The paramaters are like variables that can be called from within the function. The curly braces `{}` contain what the function does with the inputs and returns or outputs the result. A function be passed into another function or called back from a function. Functions create scope. Variables declared within a function are locally scoped to that function. They cannot be referenced outside of the function except through closure (see Below).
    5. Booleans - Booleans are binary in nature. They are either true or false. In fact, an example of their binary nature is that true evaluates to 1 and false evaluates to 0. If you logged `console.log(true + false + true);` the console would return 2.  Booleans are often used with conditional statements to check for the existence or truthiness of certain conditions within the data.  
3. Closure is a function that can reference a variable bound to it within another function. For example 
```javascript
const counterFactory = () => {
  let i = 0;
  return {
    increment: () => {
      i++;
      return i;
    },
    decrement: () => {
      i--;
      return i;
    },
  };
};
```
If you log `increment()` or `i` you will get a reference error telling you that neither `increment` nor `i` is defined. But if you assign the *counterFactory* function to a variable like `count`, for example (`const count = counterFactory`), then you can call the increment function like so `count.increment();` and you will get a `1` returned. So you can see that now you can reference the `increment` and `i` inside the `counterFactory` function.
4. The four principles of the `this` keyword are:
    1. **Window Binding** - `this` written inside of a function that is in the global scope refers to the window object.
    2. **Implicit Binding** - when you call the function using a dot before the function, `this` is bound to the object to the left of the dotl
    3. **New Binding** - when you refer to a constructor function using the new keyword the `this` is bound to the new object you created using the constructor.
    4. **Explicit Binding** - When you use the `.call`, `.apply`, or `.bind` methods you explicitly define what object to which `this` is bound.