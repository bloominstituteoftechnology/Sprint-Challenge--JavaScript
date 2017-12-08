# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between .forEach and .map.

    .forEach is an array method that is like a for loop in that it iterates over each value/element inside the array. .forEach is easier to read because you can just put in the function inside the parentheses and the function's parameters. In other words, if you use a forEach on an array, it will call on the function to go over each value/element individually in the array. 

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

    Strings, Booleans, Null, Undefined, and Number are the 5 data types in JavaScript. Arrays are special because they are the only object that can take all of these data types. 
    Example: array = [1 , "two", true, null]; and I can get undefined if I try to call array[4] because there is no index 4 inside the array.

3. What is closure? Can you code out a quick example of a closure?

    In nested functions, a closure in an inner function can go outside of its own function and access the variables in the outer (enclosing) function. The closure can access three variable chains: its own, the variables of the enclosing function, and the global scope variables located outside of the outer function.

    Example: 

    function showName (firstName, lastName) {
        let  nameIntro = "Your name is ";
    
    function fullName () {
        return nameIntro + firstName + " " + lastName + "."; 
    }
    return fullName();
    }

    showName('Faiza', 'Husain'); //Your name is Faiza Husain.

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

    'Global object' --> refers to the global scope variables outside of any function.
    
    'Implicit binding' --> when you 'bind' a variable/scope to the this keyword so that when this 
                           is invoked, it refers to the variable bound to it. So if a this keyword 
                           is called with in a function, it will refer to the variable inside that function.
    
    'new' keyword --> is when we create a new function/context for the this keyword.

    'Explicit binding' --> is when we explicitly bind a context to the function with a .call
                           or .apply method.