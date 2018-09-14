1. Describe the biggest difference between `.forEach` & `.map`.

`.map()` returns a new array as a result of applying a function to each item in an array, whereas `.forEach()` merely applies a function to each item in an array with nothing returned. If you wanted to use `.forEach()` to build a new array, you would have to build out that logic with an array declaration and then invoke `newArray.push(item)` inside the `.forEach()` method. `.map()` is therefore useful for building new arrays from old ones, whereas `.forEach()` is useful for performing operations on each item of an array for which you do not want side effects. 

2. What is the difference between a function and a method?

A method is a function which lives inside an object. Notationally, there is a difference in that functions are generally declared with the function keyword or by assigning them to a `const` or `let`, whereas methods are assigned to objects in much the same way that properties are assigned to objects. Pragmatically, methods are more useful when you want the desired operation to be contextually associated with certain bits of data (most often the properties that live on the same object). This is useful because methods are able to easily use the the `this` keyword to refer to co-located properties and methods. 

3. What is closure?

Closure is how JavaScript preserves variables that are used within functions but not located in local or global scope. Normally, once a function runs, any variables used within its scope will be garbage collected. However, functions may contain or return other functions which reference those variables. Those variables, now useless to their completed parent functions, are preserved in a closure so that child functions can still have access to them. This is useful for security and for preventing name-space pollution.

4. Describe the four rules of the 'this' keyword.

Rule 1: Global/window binding
When used within the global context, `this` refers to the global object. When used within a function, what the value of `this` defaults to will depend on whether the code is running in `strict mode`. If not `strict mode`, `this` will default to the global object, but in `strict mode` it will equal undefined.

Rule 2: Implicit binding
When `this` is used in an object method, it will refer to the object where it is being used. A simple heuristic for determining this context is to look "to the left of the dot."

Rule 3: `new` binding
When the new keyword is used and a constructor function runs, the `this` context will be bound to the newly created object.

Rule 4: Explicit binding
The `this` context can also be explicitly declared using the methods `.call()`, `.apply()`, and `.bind()`. This can be useful, for example, by allowing object methods to be used in different contexts.

5. Why do we need super() in an extended class?
`super()` calls the parent class's constructor in the context of the child class. This is useful when we are trying to extend property assignment logic across classes. 
