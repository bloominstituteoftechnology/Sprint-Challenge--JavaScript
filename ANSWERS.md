# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
- forEach() : Is a built-in iterator that performs for each 'item'/'value' a callback's body. It return: undefined.
- .map() : Is an iterator that performs a given funtionality passed as a callback on each 'item'/'value'. This method return a new array with the values returned by the callback.

2. What is the difference between a function and a method?
- Functions are objects taht are no tide to any other object, they perform 'more general' functionalities.
- Methods are Functions that are tied to another Object, they provide functionality to the objects they belongs to.

3. What is closure?
- A closure is what a function can have access to. In JS it is constituted by the function own scope and its surrounding environment. Function-Scope + Execution-Context

4. Describe the four rules of the 'this' keyword.
'this' points to:
- A 'new' brand created Object. At Objects instantiation when the 'new'  keyword is used.
- An Object Explicitly when it invokes using either: .call, .bind or .apply
- An Object Implicitly when it is invoked from this Object as a method with the 'dot' notations.
- Global object (The window in browsers) when neither of the other cases is applied.

5. Why do we need super() in an extended class?
- Is the built-in keyword that allow us to 'refer'/'call' the classe from which inherit.
