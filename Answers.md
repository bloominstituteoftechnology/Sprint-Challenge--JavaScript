## 1. Describe the biggest difference between .foreach and map.
.forEach. mutates the array.  .map returns a new array.


## 2. What is the difference between a function and a method?
A method is, in fact a function.  It is a function that is the value in the property of an object.

## 3. What is closure?
This is a nested child function where the parent cannot access the child's scope but the child can access the parent's.

## 4. Describe the four rules of the 'this' keyword.
1. When as new instance is created, 'this' becomes bound to the context of the object.
2. This is bound to the window/global object unless specified otherwise.
3. Using .call(), .apply(), and .super() explicitly binds this to the context of an object.
4. Invoking a method binds this to the context of the object.

## 5. Why do we need super() in an extended class?
Super() binds 'this' of the class properties of the parent to the class it is used in.
