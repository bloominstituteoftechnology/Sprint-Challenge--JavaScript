1. The biggest difference between `.forEach` and `.map` is that `.forEach` can mutate the array it is called on (via its callback) while `.map` returns a new array.
2. A function is independent (or belongs to the scope of the function in which it is nested). A method belongs to an object and lives in it's __proto__
3. A closure is created by the two pass compiler executing the code. It is like a backpack that a function can use to "carry" a variable from outside its own scope and use that variable. 
```js
function myFunc(){
  const myFuncVar;
  function anotherFunc(){
    console.log(myFuncVar); // will work even though "myFuncVar" is outside of "anotherFunc"'s scope because a closure is created giving "anotherFunc" access to "myFuncVar"
  }
}
```
4. The four rules of 'this' are: 1) Window Binding, 2) Implicit Binding, 3) New Binding, 4) Explicit Binding.
    1. Window Binding is default behavior. Without any other binding, in the global scope, 'this' will refer to the Window object.
    2. Implicit binding is in play when an object makes a function call using dot notation. The object that calls the function (to the left of the '.') is referred to by 'this' within the function.
    3. New binding is in effect when using a constructor function to create a new instance of a prototype object. 'this' refers to the instance of the object created.
    4. Explicit binding is when `.call`, `.apply`, or `.bind` are used to explicitly give 'this' a context. The arguments of each method define what 'this' refers to.

