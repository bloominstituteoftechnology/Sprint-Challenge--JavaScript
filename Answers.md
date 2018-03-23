# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between `.forEach` & `.map`.
#### Some of the differences between `.forEach` & `.map` are as follows:
#### `.forEach` scours an array for a particular item in the array. Once it finds the index it allows us to make use of that item but it doesn't return that item the way `.map` would.
#### `.map` iterates over an array and breaks it up into individual parts and then returns a brand new array at the end of the sequence.

### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
#### Undefined, null, boolean, number, string are all types that represent different data points in JS.
#### An array is a special data type called an object. It is considered an object because it acts like an object in the sense that it is a container for different values.

### 3. What is closure? Can you code out a quick example of a closure?
#### Closures are concepts related to scope. When a function is opened it creates a scope. Closures are when a function does not find a variable within the scope, it looks outside its scope to close the function. Here is an example.

```const foo = 'bar';
function returnFoo() {
    return foo;
}
returnFoo(); -> reaches outside its scope to find foo because it doesn't exist inside of returnFoo's scope when foo is referenced.
```

### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
#### Window Binding - When in the global scope, `this` will refer to the console object.
#### Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
#### New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
#### Explicit Binding - Whenever JavaScript's call or apply method is used,this is explicitly defined.

