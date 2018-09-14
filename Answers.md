1. Describe the biggest difference between `.forEach` & `.map`.
forEach allows you to run a block of code for each item in an array, and changes the array.  Using map will return a new array based on a block of code.

2. What is the difference between a function and a method?
A method is a function inside of an object.

3. What is closure?
Closure is like a little backpack used to store variables allowing function scope to be used inside of block scope.

4. Describe the four rules of the 'this' keyword.
    * implicit - used to bind to the element when the element is invoked.

    * explicit - binding this directly to an element by stating the binding element.  can use .call(), .apply() and .bind()

    * new - bind this to a newly created object

    * window - default to this, if none of the above principles are used then the this keyword binds to the window (normally not something you want)

5. Why do we need super() in an extended class?
super() is used in an extended class as a way to inherite not only parent properties but the parent methods as well.
