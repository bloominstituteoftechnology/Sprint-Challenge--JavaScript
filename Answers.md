1. Describe the biggest difference between `.forEach` & `.map`.
   The main difference between .forEach and .map is that .map returns a new array and .forEach does not.

2. What is the difference between a function and a method?
   A function's closure is the global window object and a method's closure is the object it is called within, i.e., a class or factory function.

3. What is closure?
   A closure is an inner function's ability to access outer function's variables declared in the outer function's scope.

4. Describe the four rules of the 'this' keyword.

1) When called in a function 'this' is the window object
2) When called as a method 'this' is whatever is to the left of the '.'
3) When called as a constructor 'this' will point to the object created be the constructor
4) When using .bind, .call, or .apply 'this' is whatever you set it to be.

5. Why do we need super() in an extended class?
   Super allows you to access the defined variables and methods on a parent class.
