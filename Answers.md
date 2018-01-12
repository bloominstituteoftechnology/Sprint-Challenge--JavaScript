# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between `.forEach` & `.map`.

The primary difference between these two methods is that `.forEach` operates directly on the array which it receives as input, while `.map` returns a new array as a result.  This can be easily seen in the presence of `return` within the `.map` method - it actually returns the values it creates to a new array.

### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

  *integer
  *boolean
  *string
  *array
  *function

Arrays are especially useful because they can store other variables and allow them to be accessed by numerical index.  This makes it simple to use a loop or method to iterate over every member of a large data set.

### 3. What is closure? Can you code out a quick example of a closure?

Essentially, closure is the idea that a particular instance of a function only has access to variables that were within its scope at the time it was created.  This can be useful, because it can allow the association of different sets of data with particular functions, which aids in code reusability.

const raiseToNthPower = (n) => {
  return (x) => {
    const base = x;
    for (let i = 1; i < n; i++) {
        x *= base;
    }
    return x;
  }
}

allows me to create new functions like:
const square = raiseToNthPower(2);
const cube = raiseToNthPower(3);
which, through closure, can 'hold on' to the parameters used to initialize them as variables within their scope, and so now `square()` or `cube()` can be called as many times as desired, without having to specify the exponent every time.

(side note - I coded that one off the top of my head and it worked exactly right the first time I pasted it over into a debugger! Yes!)

### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. Within the global scope, `this` refers to the window object.
2. Within a method, `this` is the object to the left of the `.`.
3. Within a constructor function, `this` is the specific instance of the object being constructed.
4. If you desire behavior other than the above described, you can explicitly set the context of `this` by using the `call` or `apply` method.