1. Describe the biggest difference between `.forEach` & `.map`.
   `.forEach` and `.map` are two array methods .
   In the case of `.forEach` just work on each element 
   of the array once provided by a callback function.it does not mutate the array on which it is called.the forEach() method doesn’t actually return anything . 
   the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size

2. What is the difference between a function and a method?
   a function is a set of statement that can reside anywhere in the scopes and a function can take a value and return a value .
   while a method is a special function that perform action on an object to manipulate that object .
   it's an object property that contains a function .

3. What is closure?
  A closure is a function having access to the parent scope, even after the parent function has closed. in other terms a closure only relevant when a function is defined within another function.and that function use variable from the outer scope to use as parameter . 

4. Describe the four rules of the 'this' keyword.

a) window binding
  when we call a function without any other item preceding the dot , without call bind and apply .
  in this case the function will be call on the window object and this will reference the windown object.Hence window binding .
    
b)Implicit binding
  the first thing to try when is to figure out "this" is to determine when this function invoked?
  the rule of implict binding says when you call a function or invoked a function look to the left of the dot.from functiion invocation , that what "this" will reference.
 
c)new Binding 
  whenever we used a constructor function to create a new object , "this " will refer to the instance of the newly created object .
    
d)explicit binding 
  call , apply and bind 
  if we have standalone function in the global scope and we have and object and 
  we want to call that function  in the context of the object and we use the method "call apply and bind" in this way.we have an explicit binding of "this " .


5. Why do we need super() in an extended class?
the keyword super()is used to access function and property in a parent object after we extend the class into a subclass . 

