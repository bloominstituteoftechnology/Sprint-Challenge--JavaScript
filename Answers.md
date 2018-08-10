# Answers
1. Describe the biggest difference between .forEach & .map.
   * `.forEach` iterates over an array and executes a function once on each member of the array. Nothing is returned and you are allowed to mutate the original array. `.map` iterates over an array, transforms each member of that array according to a given function, and then returns a new array consisting of the transformed members. This method does not mutate the original array.
2. What is the difference between a function and a method?
   * A `function` is executable code, not associated with a particular object, that is called by name(or can by anonymous). You explicitly pass a function. A `method` is a function that is associated with a given object and is implicitly passed(e.g. `myObj.method()`).
3. What is closure?
   * A variable in JavaScript can be global or local. In order to make it local, you use `closure`. A closure consist of a function and the lexical environment of that function. This makes it such that if you are not within this environment, you do not have access to this variable.
4. Describe the four rules of the 'this' keyword.
   1. When in global scope, `this` will reference the window or console you are in.
   2. In impicit binding, `this` wil reference the object before the dot upon which the method is invoked.
   3. When creating a new object via a constructor function, `this` will reference the specific object that is created.
   4. When you are using the methods call or apply, you are using explicit binding. So when an object calls on another object, `this` will reference the calling object making the call.
5. Why do we need super() in an extended class?
   * `super()` binds the `this` keyword.
