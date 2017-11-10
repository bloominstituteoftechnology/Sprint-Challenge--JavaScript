# Your responses to the short answer questions should be laid out here using Mark Down.
1. Syntactically, `.forEach` and `.map` differ by the amount of arguments they take in.  `.forEach` method can take up to three parameters: element, index, and array.  Whereas `.map` only gets passed one argument which is in the form of a function. `.forEach` is  not going to be useful if you wish to permanently modify an array, since it always returns undefined.  `.map` comes in handy in this case because it always returns a new array.
2. Five different data Types are Strings, Numbers, Booleans, Arrays, and Objects.  Arrays are unique from these items because they are used to store multiple values in a single value.  Unlike strings, arrays can be modified in place if I remember correctly.
3. Closure is something that could potentially drive you crazy if you don't find it in your life at some point or another.  In Javascript, closure statements typically are constructed of two methods which can be looked at as an inner statement and an outer one- nested in other words.  In it's most basic form, the outer statement declares a variable, and it's inner functions have access to this variable without having to create it within itself.  The outer function usually will call on the inner function and the closure is provided by the inner function by accessing this variable. example:

```javascript
function sayHello() {
    const message = 'hello';
    function displayMessage() {
        return `${message}`;
    }
    displayMessage();
}
console.log(sayHello()); //output will be 'hello'
```
4. the 'this' keywords four principles are:
  1. it is like a window/global value that points to that object.  
  2. It implements implicit binding- the object before the dot becomes 'this'.
  3. It is used for new binding - the object whre the new keyword is called.
  4. Working from the third principle it can create explicit binding on the object where the new keyword is called.


### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


