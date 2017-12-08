# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
* `.forEach` only iterates over the elements calling the function on each element.
* `.map` is similar to `.forEach` in that iterates over each element but it calls the supplied function and **transforms** each element before placing it in a **new array**.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays? 
* Five different data types that can contain values are String, Number, Boolean, Object, and Function.
* Arrays are a type of Object that can be easily manipulated with built in JavaScript tools.
3. What is closure? Can you code out a quick example of a closure?
* A closure is an inner function that has access to the outer function’s variables. Consider the following example: 
```javascript 
function whatIsToday() {
    let today = 'awesome!';
    function todayIs () {
        console.log('Today is ' + today);
    }
    todayIs();
}
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
* When a function is in the global scope and `this` is called it will return the value of `this` in the window object.
* When a constructor function is created `this` refers to the key that is created and will be passed by the constructor function.
* When a function is called by a preceding dot, the object before that dot is `this`.
* When `.call` or `.apply` method are used, `this` is defined in the method.



