# Your responses to the short answer questions should be laid out here using Mark Down.

**Question**

1.  Describe the biggest difference between `.forEach` & `.map`.

**Answer**

Both `.forEach()` as well as `.map()` work the same way, in that they take a callback function
which is invoked for every element in the array with the following arguments

1.  The element
2.  The index of the element
3.  The reference to the entire array

The difference between `.forEach()` and `.map()` is that `.forEach()` method returns undefined while the
`.map()` method returns a new array based on the return values given by the callback function.

**Question**

2.  What is the difference between a function and a method?

**Answer**

- Functions are first-class objects in JS.
- A function in JS is a "callable object" which can be invoked by adding parenthesis to the name of the function. It can take
  arguments and it can return a value.
- A method is a specific type of function which is tied to an object and works with the properties of that object. It is marked
  by the use of `this` inside the function body.

**Question**

3.  What is closure?

**Answer**

When a function is able to access and manipulate a variable which was declared outside of its local scope but in any
one of its parent's scope, the function is said to have a closure on such variable. Such variables, even if they are
block scoped, will not be garbage collected even if the block completes executing until the references to the
function(s) which have closure over such variables have gone out of scope and garbage collected. Closures are also a
way to implement the information-hiding paradigm in JavaScript.

Example of closure

```js
function createClosure() {
  let privateVariable = 0;

  return {
    getValue: () => privateVariable, // this function has closure over privateVariable
    setValue: x => (privateVariable = x) // as does this function
  };
}

let closures = createClosure();
console.log(closures.getValue()); // 0
closures.setValue(3);
console.log(closures.getValue()); // 3
console.log(closures.privateVariable); // undefined
console.log(privateVariable); // Reference Error
```

**Question**

4.  Describe the four rules of the 'this' keyword.

**Answer**

The following are the rules for determining the value of `this` in decreasing order of precedence.

1.  Global/Window object: When not in strict mode, when `this` is used in the global scope, the value of
    `this` is set to to the global/window object.
2.  Implicit binding: The value of `this` inside a method has the value of object provided the method was invoked
    from the context of the object i.e. it is invoked with `object.method()`.
3.  Explicit binding: The value of `this` can explicity be bound to any object by using `Function#bind` `Function#call` or
    `Function#apply`. All of those functions take an argument for the value of `this`.
4.  `new` binding: Whenever a constructor function is invoked with the `new` keyword, the value of `this` inside the
    constructor function points to the new object created.

The order of precedence is important to note here. Even if a constructor function is explicitly bound to some other object, when
used with `new`, the value of `this` will always point to the new object. Likewise explicitly binding `this` to a object method
will override the default `this` behavior inside the method.

The value of `this` is lexically determined when used with arrow functions and it cannot be overriden with explicit binding.
Arrow functions can never be constructor functions.

**Question**

5.  Why do we need super() in an extended class?

**Answer**

In order to inherit properties from the parent class we would need to use the Parent's constructor function with the help of
`super()`. `super()` is syntactically equal to `Parent.call(this)`. The use of `super()` avoids repetition of code in the
Child classes and keeps the code DRY.
