# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`. I think the biggest difference is that map doesn't touch the initial values contained in your array and instead returns a new array with new values, while forEach can actually change the values in your array.
2. What is the difference between a function and a method? A method has an object associated with it while a function can exist on its own.
3. What is closure? In JS, closure is when a function refers to a variable that is not contained locally within the function. Even after everything outside the scope of the local/child function has run its course, the local/child function has access to the outside variable. I'm sure this comes in handy, and I might even be using this feature on a daily basis but I have no conscious awareness of it and am not sure what the practical use case for this may be. Maybe it is something we are already doing elsewhere.
4. Describe the four rules of the 'this' keyword.
Implicit binding - If a function is called as a method using dot notation, whatever is immediately to the left of the dot is 'this'.
Explicit binding - If you call a function using call, apply, or bind, 'this' is the argument passed in to the function.
New binding - with new binding you create a new object which will be "this" when you call the function.
Window Binding - the default - if the other 3 don't apply, this one does. With window binding "this" is a global object.

5. Why do we need super() in an extended class? Because if you don't do it your extended class won't take on the attributes or methods of the parent class. You'll get a whole bunch of errors if you then try to have the extended class do anything that originally pertained to the parent class.
