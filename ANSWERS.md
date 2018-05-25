# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
<!--forEach executes a function once for each array element while map creates a new array with the results of calling a function on that array's element.  So forEach doesn't actually return anything while map returns a new array. -->
2. What is the difference between a function and a method?
<!--A function is called by name and can be given data to "function" on and can return data. The data passed is explicitly passed.  A method is writeen on data that is retained by a class like an object.  It is associated with an object.  This is implicitly passed.-->
3. What is closure?
<!--Closure pertains to a scope chain that includes inner, outer and global.  This means an inner function has access to the outer and global.-->
4. Describe the four rules of the 'this' keyword.
<!--Window binding refers to being in global scope.  "this" is be the window object by default.
2)Implicity binding refers to calling a function with a dot.  The object is whatever is to the left of the dot.  object.yoJoe.  3)New Binding is when you create a new object that inherits a constructors functions.  4)Explicit binding is when you explicitly call in order to override what the parent constructor is set to.  joe.talk.say(whodare) or terry.talk.apply(whodare) 
-->
5. Why do we need super() in an extended class?
<!--super allows you to not have to use prototype object create and it also eliminates having to call the parent constructor function>
