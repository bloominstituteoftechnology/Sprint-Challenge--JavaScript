1. The biggest difference between .forEach and .map is that .map creates a new array in which the result is stored in. Whereas, .forEach edits the original array.

2. A method is a function that is stored within an object. A function that is not a method stands alone outside of an object. 

3. You can only use a variable that has either been defined in the local scope, or upstream of that scope. For example, a parent function cannot use a variable that has been defined in its child function, but it can use a variable that has been defined in the global scope. This behavior is known as closure. 

4. There are four principles to the 'this' keyword that all have to do with to what 'this' is bound. The first is window/global binding which means that the value of 'this' is bound to the window, and when called will print out everything stored in the window. The second is implicit binding, which means that the 'this' keyword is automatically bound to a function. Whenever that function is called using dot notation, the 'this' value is equal to what is left of the dot. The third pricinple is explicit binding, where you control the binding of 'this' by using 'call', 'apply', or 'bind'. The fourth is new binding, which means a constructor function is used, and the 'this' keyword refers to a specific instance of that function being called. 

5. In an extended class, we need a way to link the word 'this' to the parent class. That is what super() accomplishes. 


