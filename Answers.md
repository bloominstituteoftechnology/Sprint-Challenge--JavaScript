1. Describe the biggest difference between `.forEach` & `.map`.
    * forEach doesn't actually return anything. It's just a simple for loop but simplified meanwhile map will return the current value in a new array without modifying the existing one being used. 
2. What is the difference between a function and a method?
    * The only difference is that method is a function inside a object class.
3. What is closure?
    * A closure is an inner function that has access to the to the values inside the outside function meaning that if I have a function with a variable and I put a function inside I can use the variable inside that function but if I try to use it outside the function that holds that variable I don't have access to it.
4. Describe the four rules of the 'this' keyword.
     1. Window binding: the value 'This' refers to the window or global object.
     2. Implicit binding: Inside a function the object before the dot is this
     3. New binding: When you use a constructor function this will refer to the object created and return with the constructor function 
     4. Explicit Binding: Whenever you use a call or apply method
5. Why do we need super() in an extended class?
    * super will bind a different class with the current class giving access to the values inside. This is important when you have multiple objects that are a bit different but have a common trait.
