# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
> forEach just loops through an array while map actually implements a function inside of the array
2. What is the difference between a function and a method?
> a method is just a function inside of an object
3. What is closure?
> a closure is data (property or method) that can be accessed from outside of its owner. It's sort of like reaching into a method to alter a property within that method, or call a variable from within that method.
4. Describe the four rules of the 'this' keyword.
> Implicit binding - this is bound specificially to the object that it belongs to when invoked. aka the object to the left of the '.' when called: example me.name - of course, this is assuming that we have a constructor of an object that has this.name inside of it.
> Explicit binding - using the call() or apply method to invoke global properties in a specific instance
> Window binding - the default binding for this is on the window object
> New keyword binding - this is now bound to the instantiated object
5. Why do we need super() in an extended class?
> super() is the keyword that let's the compiler know that we would like to inherit all properties and methods of the class we would like to extend.