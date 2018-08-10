## 1. Describe the biggest difference between .foreach and map.
The biggest difference between `.forEach` and `.map` is that `.forEach` can mutate the array that it is called on, whereas `.map` returns a new array, so the callback function generally doesn't mutate the original array (though, if the array were filled with objects, you could still mutate the array items by reference).

## 2. What is the difference between a function and a method?
A Method is a function. A method is just a function that has been stored as the value in a `key: value` pair in an object's property.

## 3. What is closure?
A closure is basically just a child function nested in a parent function wherein the nested child function has access to its parent's scope, but the parent does not have access to the child's scope.

## 4. Describe the four rules of the 'this' keyword.
1. Global/Window Binding: If 'this' hasn't been bound to a specific context, the context of 'this' is the Window or Global Object.
2. Implicit Binding: When we invoke a the method of an object, the context of 'this' is bound to the context of the object.
3. Explicity Binding: We can explicitly bind 'this' to the context of a called function by using .call(), .apply(), and .super();
4. `New` Binding: When a new instance of an object is created using the `new` keyword, 'this' is bound to the context of the instance of that object.

## 5. Why do we need super() in an extended class?
We need super() in an extended class to bind the 'this' keyword of the parent class's properties to the context of the current class. 