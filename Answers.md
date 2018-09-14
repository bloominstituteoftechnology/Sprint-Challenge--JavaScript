<!-- 1. Describe the biggest difference between .forEach & .map. -->
1. .map creates a whole new array of the items you need. .forEach just goes through the array and gives you the items you need, but in the same array.



<!-- 2. What is the difference between a function and a method? -->
2. The way I see it, a method is a function, except it is inside of an object. Regular functions aren't inside objects, while methods are.



<!-- 3. What is closure? -->
3. When functions are created, they have scopes. Variables declared in that function belong to it, but if you ever refer to a variable that isn't in a specific function, then the function looks up the chain of scope to see if the variable has been referenced. When the function is looking in it's scope chain for a variable, that's referring to closure.



<!-- 4. Describe the four rules of the 'this' keyword. -->
4. The four rules of the 'this' keyword are: 
    1. implicit binding - when a function is being invoked, if there is anything on the left of the dot, then that is what the 'this' keyword is referencing to.

    2. explicit binding - when a function is being invoked with '.call', '.apply', or '.bind' methods, the first parameter they take is what the 'this' keyword is referencing to.

    3. new binding - when constructor functions are being used, the 'this' keyword is referencing to object that's being created with the 'new' keyword.

    4. window binding - when you are in the global scope, the 'this' keyword is referencing ot the window object, which is where all of the javascript is happening behind the scenes.



<!-- 5. Why do we need super() in an extended class? -->
5. super() is needed in an extended class because that is what allows the attributes to be inherited from the parent object.