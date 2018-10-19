
1. Describe the biggest difference between `.forEach` & `.map`.
> .forEach performs an action on each item in the array, .map creates a new array from the performed action on each item

2. What is the difference between a function and a method?
> As long as we are talking about JS, a funciton is a standalone construct which performas an action. A method is a function inside an object.

3. What is closure?
> Closer refers to the variable access granted to sub functions, and denied from enclosing fucntion. 

4. Describe the four rules of the 'this' keyword.
>1. window binding: when nonothing else applies, this points to the window. 
2. implicit binding: this looks to the left of the dot at call time
3. new binding: this is bound to the new object being constructed, whenever a function is invocted with the 'new' key word
4. explicet binding: telling a function what the context of this is going to be using 'call', 'apply', or 'bind'

5. Why do we need super() in an extended class?
> it alows us to to map the this keyword to constructors in an inherited class