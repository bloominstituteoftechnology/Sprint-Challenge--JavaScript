# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
  Both forEach and map iterate over an array
  forEach will iterate and modify the original array based on the callback you pass it
  map will iterate and return a new array based on the results of the callback you pass it


2. What is the difference between a function and a method?
  they are pretty much the same, the only difference is the context upon which they are built, how they are invoked, and how the this keyword is affected
  functions are those which are created in their own context, not tied to anything but themselves
  methods are created through objects and their prototype, they affect the this keyword in a special way, they can also be inherited though the prototype, and they are mainly invoked by using a dot notation


3. What is closure?
closure has to do with the scope of functions, all functions have their own scope when created, they have the ability to look outside of their scope to find variables/assignments if need be. They are also considered to be private since nothing can look inside of a functions' scope. This means that functions can be nested within eachother, and even the most inner nested function can look all the way out to the global scope if need be. 


4. Describe the four rules of the 'this' keyword.
  1. window binding - this, if it not pointed to anything will always point to the most global environment, inside the browser, that would be the window object

  2. new binding - when it comes to constructors, when created, it is set up to where any new object created through the new keyword using the contructor, will also bind the this keyword to each seperate object created

  3. implicit binding - this is also known as automatic binding, when used with objects, this will point to them when invoking a method of theirs, since methods are invoked with dot notation, you can always tell where the this keyword is pointing to, based on whatever object is to the left of the dot notation

  4. explicit binding - if you want to manually set the this keyword to bind with certain objects or functions, you can bind it with 3 different keywords, call, apply, and bind. call and apply are essentially the same thing, but apply can bind this will arrays as parameters, and it will spread out the arrays automatically unlike call. bind will return a new function


5. Why do we need super() in an extended class?
  the super and extend are used in the new es6 syntax for the class keyword, they are used to bind the this keywords to parent class-like objects. When parent class-like objects inherit children, they can pass down their properties, the this binding, and their prototype containing their methods. In es5, you needed to be more explicit for class-like objects to be able to link up their prototype and their properties and this. you would need to use the special keyword call to bind this, and you would also need to use object.create to link up their prototype, but with the new es6 syntax, you can do all that within a special class-like object, you just need to extend from the parent, and also use the super() keyword to bind the this keyword and pass down the parent properties

