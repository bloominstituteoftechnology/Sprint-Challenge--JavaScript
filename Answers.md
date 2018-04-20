# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

`.forEach` simply performs the callback result on each element of the array.
* Because of this, `.forEach` is great for doing side effects, like `console.log()`, or pushing/popping things from arrays.
* Because it doesn't return anything, some kind of mutation is necessary to see its results. If you want to iterate over an array and do the callback function on each element, you'd have to change the array you're iterating over, or initialize a blank new array and change that to see any output.

`.map` takes the each result of the callback functions and returns all of the results into a new array.
* Because of this, this doesn't need to change the array it is working on, nor do you need to set up an output array of your own. `map()` automatically returns a new array filled with results of the callback function iterating over the original array.



2. What is the difference between a function and a method?

A function and a method is inherently the same thing: a block of code that does an operation, such as transforming data. The only difference is that **a method is explicitly attached to an object**. 

Function:
```js
function bar() {
    return 'Hello';
}
bar();
```

Method:
```js
const foo = {
    bar: function () {
        return 'Hello';
    },
}
foo.bar();
```

3. What is closure?

Closure is the idea that the engine can look outward and upward to resolve the value of variables. For example, 

```js
function room() {
  let personA = 34;
  return function() {
    let personB = 35;
    return personA + personB;
  }
}

let whatAreTheyDoing = room();
console.log(whatAreTheyDoing());
```

In the body of the function definition, we need the values of `personA` and `personB`. But, we only have the value of `personB` available right in that function. Closure allows us to go outside of the function and to the variable environment of the 'parent', which is function `room()`. It does have the value for `personA`, so the engine will proceed to evaluate `personA + personB` => `34 + 35` and return `69`. If it couldn't find `personA` in `room()`, then the engine would continue to look outward until the hits the global scope. If it fails in its search, only then will it throw a `Reference Error`.

This particular snippet points to something a little more esoteric than the above explanation, but I think this works nicely.

4. Describe the four rules of the 'this' keyword.

When an execution context is established, `this` points to the object the context is associated with. This covers the below principles:
* Window/Global Binding
If the context you're working on is the global context, `this` will point to the global object. This is kinda why this:
* Implicit Binding
If you call a method, `this` points to the object the method is assocated with.

You can direct what `this` points to. This covers the below principles:
* Explicit Binding
You can tell JavaScript what `this` should refer to with `call()`, `apply()`, and `bind()`.
* `new` Keyword Binding
When you use the `new` keyword when you use a constructor function, `new` redirects `this` to the new instance of the object, instead of letting it stay directed to the object of the constructor function (*which is probably global*).

5. Why do we need super() in an extended class?

`super()` is the newer way of saying `ParentClass.call(this, attributes);`. In other words, `super()` calls the base class' constructor function, binds `this` to the extended Class, then uses that constructor function to populate the new object with properties from the base class, assigning values passed as arguments into `super()` in the extended class.