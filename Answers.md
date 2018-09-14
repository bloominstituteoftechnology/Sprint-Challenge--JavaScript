1. Describe the biggest difference between .forEach & .map.
    .forEach mutates the array while .map creates a new array which it mutates.
2. What is the difference between a function and a method?
    A method is invoked via an object, a function can be invoked in and of itself as long as any required parameters are filled.
3. What is closure?
    Closure is the fact that a block nested within another block has access to the outer block's scope. Closure can be observed within the console.
4. Describe the four rules of the 'this' keyword.
    1. `this` used without being bound to anything tries to returns the context of the Window object
    2. `this` used in a constructor function returns the context of the object that was created with new.
    3. `this` used in implicit binding returns the context of the object it was bound to
    4. `this` used in explicit binding returns the context of the function it was bound to via call(), bind(), or apply()
5. Why do we need super() in an extended class?
    super() gives the extended class access to the properties of the parent class.
