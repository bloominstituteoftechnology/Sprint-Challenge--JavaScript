Chad Jemmett

1. Describe the biggest difference between `.forEach` & `.map`.
  The largest difference between `.forEach` and  `.map` is what they return. `.forEach` only alters the items in the array based on the criteria you provide. For example, if you call `.forEach` on a names array you can capitalize each name in the array. It returns the array with the name capitalized. The `.map` method returns a new array. You can do the same thing with an array full of names. Only instead of maintaining the original array, you get a new one. You can do this with an array `const newArray = oldArray.map(// do some thing to the array);` What you get back is the newArray with the changes you made with the `.map` method.



2. What is the difference between a function and a method?
  Functions can be used in almost any context and can be used alone. Functions can execute a list of commands.  Methods are only used on the class or object they were created for. Example: the `.filter` method is made for the Array class. Whereas, `.toUppperCase` is made for the String class.



3. What is closure?
  Closure is when a function is wrapped in another function. The inner function can access variables outside itself. However, anything inside the inner function is invisible from the outside.



4. Describe the four rules of the `this` keyword.
    1. Explicit binding: This will refer to a specific object when you use `.call`, `.bind`, or `.apply`.
    2. Implicit binding: `This` will refer to the object to the left. If `this` is used in a function. `This` will refer to the object the function was called on.
    3. New binding: When using the `new` keyword, `this` will apply to the object being created. Example. 
      `const newObject = new Thing(propertyValue1, propertyValue2)`
      The `this` keyword will bind the `propertyValues` to the `newObject`.

    4. When used outside of the above examples, `this` refers to the window object.




5. Why do we need `super()` in an extended class?
  The `super` keyword lets the current class use the functions of the parent constructor. `Super` is used in a child class. It will inherit the functions and methods of the parent class.

