# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
.forEach applies some kind of action/function to each element in an array. This function has access to the individual elements of the array, the element index, and the whole, original array. Through this last item, .forEach can alter the contents of the original array. .map on the other hand, performs some action or function on all the items of an array, one by one, and generally returns some value from that action to a NEW array, which can be held in a variable.
2. What is the difference between a function and a method?
The difference lies entirely in where the scope of the function exists. If the function is within an object, then that function is a method, or an object method. If the function is not in an object, then it is merely a function.
3. What is closure?
Closure is when a child function has access to a variable within a parent function or lexical contexts' scope, even if that parent object or function is no longer currently running.
4. Describe the four rules of the 'this' keyword.
this can have....
implicit binding - This is when the this keyword is naturally defined within the
                  scope of an object  or function, and automatically binds to the local scope in which it was created.
explicit binding - This is when the user explicitly states to which scope they
                  would like the this keyword to bind to. This can be done generally with three functions, .call(), .apply() and .bind(). Both .call and .apply can be used to call a function with an explicitly set scope, differing only in the way they unpack arguments to that function, while .bind() is best used to create a function variable with the function and the explicitly bound this keyword encompassed within that variable
window binding - This is similar to implicit binding, but when an object or
                  function is defined within the global scope, it binds to the highest level of scope it can, which is usually a window object in a browser, or perhaps the console in a console application.
new binding - This is when the keyword new is used to create a new object, and
              the this keyword is bound to the variables within that new object. The compiler automatically creates a new scope within that new object which the this keyword is then bound to, allowing all references to this within that object, to stay within that object.

5. Why do we need super() in an extended class?
super() allows a connection between the child class and the parent class. It technically binds the child class to the parent class, which means it pulls in all the parent class' properties, but with the this keyword applied to the child class, serving the same function as Parent.call(this,properties) in non pseudo-classical prototypal inheritance
